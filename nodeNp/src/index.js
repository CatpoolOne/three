import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { METHODS } from 'http'

Vue.use(VueAxios, axios)

var http = new Vue({
el:'#code',
data:{
    areas:[],
    cities:[],
    wareHouses:[],
    chose:'',
    city:'',
},
mounted: function()
{
    Vue.axios.post("https://api.novaposhta.ua/v2.0/json/",
    {
        "apiKey": "a7e789fde9d8eb6561e499f1adc0e6d3",
        "modelName": "Address",
        "calledMethod": "getAreas",
        "methodProperties": {}
        })
    .then((response =>{
        
        this.areas = response.data.data;
    }))
    Vue.axios.post("https://api.novaposhta.ua/v2.0/json/",
    {
        "apiKey": "a7e789fde9d8eb6561e499f1adc0e6d3",
        "modelName": "Address",
        "calledMethod": "getCities",
        "methodProperties":{
        }
        })
    .then((response =>{
        
        this.cities = response.data.data;
    }))
 
},
methods:{
    getViddilsByCity: function(){
        Vue.axios.post("https://api.novaposhta.ua/v2.0/json/",
        {
            "modelName": "AddressGeneral",
        "calledMethod": "getWarehouses",
        "methodProperties": {
             "CityName":this.city,
        },
        "apiKey": "a7e789fde9d8eb6561e499f1adc0e6d3"
            })
        .then((response =>{
            
            this.wareHouses = response.data.data;
        }))
    }
    }

})