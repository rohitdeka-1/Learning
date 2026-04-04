import streamlit as st

st.title("Hello")
st.subheader("Randi with streamlit")
st.text("Welcome to streamlit")
chai = st.selectbox("Your favourite chai: ", [ "Masala", "Mango", "Chai"])
st.write(f"Your choose {chai}, Excellent choice")

if chai=="Mango":
    st.success("Your chai has been successfully ordered")
else: 
    st.error("Not Accepted")

