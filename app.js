'use strict';

require('dotenv').config();

const express = require('express');

const superagent = require('superagent');

const PORT = process.env.PORT || 5000;

const app = express();

// Q1 :
    
    $('#button').on('click',(e) => {
        e.preventDefault();
      $('#green').css('background','green').then($('icon').css('background','red'));
      setTimeout(() => {
          $('#green').removeAttr('style');
          $('#yellow').css('background','yellow');
        },5000) 
        setTimeout(() => {
            $('#yellow').removeAttr('style');
            $('red').css('background','red')
        },5000)
    })

    // Q2 : 
    
    const first = $('#first').val();
    const middle = $('#second').val();
    const last = $('last').val();
    const age = $('#age').val();
    const email = $('#email').val();
    const reEmail = $('reEmail').val();
    const pass = $('#pass').val();
    const rePass = $('#rePass').val();
    
    $('#userBtn').on('click',(e) => {
        e.preventDefault();
        if(pass != rePass && email != reEmail) {
            alert('incorrect email or password ! try again please');
        }

        Email.send({
            Host: "smtp.gmail.com",
            Username:$('#email').val(),
            Password:$('#pass').val(),
            To: 'aabuatherah@nixpend.com',
            From: "sender@email_address.com",
            Subject: "Nixpend",
            Body: `i am ${first} ${middle} ${last} and i am ${age} years old `,
        })
        .then((message) => {
            alert("mail sent successfully")
        });
    })
    
    // Q3 : 
    
    let resultArr = [];
    function getData(){
        const url = 'https://my-json-server.typicode.com/ahmad-athra/exam1/ChartData';
        superagent.get(url)
        .then((data) => {
            let result = data.body;
            resultArr = [...result];
        })
    }
    getData();

    
    let ctx = $('#myChart');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels:resultArr.map((item) => {
                item.xaxis.map((element) => {
                   return element; 
                })
            }),
            datasets: [
              {
                label: 'Months',
             
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 5
              },
              {
                label: resultArr.map((ele) => {
                    ele.yaxis.map((items) => {
                        return items;
                    })
                }) ,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 5
              }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        } );

    









app.listen(PORT,() => {
       `listening to PORT ${PORT}`;
    });