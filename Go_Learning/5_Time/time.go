package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Time Module")

	//Present Time
	presentTime := time.Now()
	fmt.Println(presentTime)

	//Formatting Current Time
	fmt.Println(presentTime)
	// fmt.Println(presentTime.Format("01-02-2006 15:04:05 Monday")) //What a bullshit method

	//Create a time
	createdTime := time.Date(2020, time.October, 10, 12, 01, 00, 00, time.UTC)
	fmt.Println("Our create Time :", createdTime)

}
