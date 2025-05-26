package main

import "fmt"

func main() {
	//{pointer}

	// var ptr *int  // To create a pointer
	// fmt.Println("Value of ptr is :", ptr) // <nil>

	myNum := 23
	var ptr = &myNum                      // To refer  any variable
	fmt.Println("Pointer Address", ptr)   // Address : 0xc00000a0e8
	fmt.Println("The actual value", *ptr) // 23

	*ptr = *ptr + 2    // Update the real myNum variable
	fmt.Println(myNum) //25

}
