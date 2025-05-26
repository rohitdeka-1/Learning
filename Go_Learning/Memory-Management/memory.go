package main

func main() {
	// new() is used to allocate memory for a variable of a given type
	// It returns a pointer to the zero value of that type
	// Example:
	// var ptr *[]int = new([]int) // ptr is a pointer to a slice (but the slice is nil and not usable until initialized)

	// make() is used to create and initialize slices, maps, or channels
	// It returns an initialized (non-nil) value of the specified type, not a pointer
	// Example:
	// mySlice := make([]int, 5) // Creates a slice of 5 integers, all initialized to 0

	// Summary:
	// - Use new() when you want a pointer to an uninitialized value
	// - Use make() when you want to initialize a slice, map, or channel and use it immediately
}
