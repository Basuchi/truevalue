const express = require("express");


const getHomePage = (req, res) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/view/index.html');
}

module.exports = { getHomePage }