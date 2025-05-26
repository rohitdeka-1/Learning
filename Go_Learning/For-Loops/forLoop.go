package main

import (
	"fmt"
	"time"
)

// For is the only constructor for looping
func main() {

	//While Loop
	var i = 0
	for i <= 10 {
		fmt.Println(i)
		i = i + 1
	}

	//Classic for Loop
	for i := 0; i <= 3; i++ {
		if i == 2 {
			fmt.Println("It is", i)
			continue
		}
		fmt.Println(i)
	}

	//1.2v Golang update Range

	for i := range 3 { // 0 to 3 w
		fmt.Println(i)
	}

	//Infinite Loop
	var count = 1
	for {
		count = count + 1
		fmt.Println(time.Now())
		fmt.Println(count)
	}

}
