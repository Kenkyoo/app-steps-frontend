import _ from 'lodash';
import $ from "jquery";
const smartWizard = require("smartwizard");

$(function() {
    $('#smartwizard').smartWizard();
});

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  