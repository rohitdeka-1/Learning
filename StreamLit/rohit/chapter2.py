import streamlit as st
import numpy as np

st.title("Data Visualization App")

# Sample data arrays
sample_data = {
    "Sales Data": [120, 135, 148, 162, 178, 195, 210, 225, 240, 255],
    "Temperature": [22, 25, 28, 32, 35, 38, 34, 31, 27, 24],
    "Stock Prices": [100, 105, 98, 110, 115, 108, 120, 125, 118, 130],
    "Website Traffic": [1200, 1350, 1500, 1800, 2100, 2400, 2200, 2600, 2800, 3000]
}

# Sidebar for selecting data
st.sidebar.header("Chart Options")
selected_data = st.sidebar.selectbox("Select Data to Visualize", list(sample_data.keys()))
chart_type = st.sidebar.selectbox("Select Chart Type", ["Line Chart", "Bar Chart", "Area Chart"])

# Get selected data
data_array = sample_data[selected_data]
x_values = list(range(1, len(data_array) + 1))

st.subheader(f"{selected_data} Visualization")

# Display the raw data
with st.expander("View Raw Data"):
    st.write("Data Array:", data_array)
    st.write("X Values:", x_values)

# Create different types of charts using Streamlit's built-in charts
if chart_type == "Line Chart":
    st.line_chart(data_array)
    
elif chart_type == "Bar Chart":
    st.bar_chart(data_array)
    
elif chart_type == "Area Chart":
    st.area_chart(data_array)

# Display statistics
st.subheader("Data Statistics")
col1, col2, col3, col4 = st.columns(4)

with col1:
    st.metric("Mean", f"{np.mean(data_array):.2f}")
with col2:
    st.metric("Max", f"{max(data_array)}")
with col3:
    st.metric("Min", f"{min(data_array)}")
with col4:
    st.metric("Std Dev", f"{np.std(data_array):.2f}")

# Custom data input
st.subheader("Custom Data Input")
custom_data_input = st.text_input("Enter your own data (comma-separated numbers):", 
                                 placeholder="e.g., 10,20,30,40,50")

if custom_data_input:
    try:
        custom_array = [float(x.strip()) for x in custom_data_input.split(',')]
        
        st.subheader("Your Custom Data Chart")
        st.line_chart(custom_array)
        
        # Statistics for custom data
        st.write(f"**Custom Data Statistics:**")
        st.write(f"Mean: {np.mean(custom_array):.2f}")
        st.write(f"Max: {max(custom_array)}")
        st.write(f"Min: {min(custom_array)}")
        st.write(f"Standard Deviation: {np.std(custom_array):.2f}")
        
    except ValueError:
        st.error("Please enter valid numbers separated by commas")

# Additional interactive features
st.subheader("Interactive Data Generation")
if st.button("Generate Random Data"):
    random_data = np.random.randint(1, 100, 10).tolist()
    st.write("Generated Random Data:", random_data)
    st.line_chart(random_data)



name = (input("Write your name"))