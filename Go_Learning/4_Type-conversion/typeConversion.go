package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("TYPE CONVERSION")
	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	fmt.Print("Input captured :", input)

	// Adding the input value to 1;
	// // sum := input + 1 // This is invalid syntax as ( input -> string , 1 -> integer )
	// // fmt.Println(sum)

	// Correct Method
	convertedNumber, err := strconv.ParseFloat(strings.TrimSpace(input), 64)
	if err != nil {
		fmt.Println("Error in conversion : ", err)
	}
	fmt.Println("Type of convertedNumber", convertedNumber)

	sum := convertedNumber + 1
	fmt.Print("Sum it by 1 : ", sum)

}
