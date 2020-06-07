package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"io/ioutil"
	"net/http"
	"os"
)

const (
	requestURL = "https://graph.facebook.com/v7.0/300577559972619/ratings?fields=created_time%2Chas_rating%2Chas_review%2Creview_text%2Crating%2Crecommendation_type%2Creviewer&limit=10&access_token="
)

type Reviews struct {
	Data []struct {
		CreatedTime        string `json:"created_time"`
		HasRating          bool   `json:"has_rating"`
		HasReview          bool   `json:"has_review"`
		ReviewText         string `json:"review_text"`
		RecommendationType string `json:"recommendation_type"`
	} `json:"data"`
}

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	req, err := http.NewRequest(http.MethodGet, requestURL+os.Getenv("FACEBOOK_API_KEY"), nil)
	if err != nil {
		return handleError(string("creating request failed")), nil
	}

	rsp, err := http.DefaultClient.Do(req)
	if err != nil {
		return handleError(string("request failed")), nil
	}:wq:

	bodyBytes, err := ioutil.ReadAll(rsp.Body)
	if err != nil {
		return handleError(string(bodyBytes)), nil
	}

	err = rsp.Body.Close()
	if err != nil {
		return handleError(string(bodyBytes)), nil
	}

	if rsp.StatusCode != http.StatusOK {
		handleError(string(bodyBytes))
	}

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(bodyBytes),
	}, nil
}

func handleError(err string) *events.APIGatewayProxyResponse {
	return &events.APIGatewayProxyResponse{
		StatusCode: 500,
		Body:       err,
	}
}

func main() {
	// Make the handler available for Remote Procedure Call by AWS Lambda
	lambda.Start(handler)
}
