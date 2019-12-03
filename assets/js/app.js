// @TODO: YOUR CODE HERE!

var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width /4;
var margin = 20;
var labelArea = 110;
var tPadBot = 40;
var tPadLeft = 40;

var svg = d3.select("#scatter")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.attr("class", "chart");

var circRadius;
function crGet(){
	if (width <= 530) {
		circRadius = 5;
	}else{
		circRadius = 10;
	}
}
crGet();

svg.append("g").attr("class", "xText");
var xText = d3.select(".xText");

xText.attr( "transform",
			"translate("+
			((width - labelArea)/2+labelArea) + 
			", " + 
			(height - margin - tPadBot)+
			")"
		);

xText.append("text")
	.attr("y", -26)
	.attr("data-name", "poverty")
	.attr("data-axis", "x")
	.attr("class", "aText active x")
	.attr("In Poverty (%)");


var leftTextX = margin + tPadLeft;
var leftTextY = (height + labelArea) / 2 - labelArea;

svg.append("g").attr("class", "yText");
var yText = d3.select(".yText");

yText.attr(
	"transform",
	"translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
	);

yText.append("text")
	.attr("y", 26)
	.attr("data-name", "healthcare")
	.attr("data-axis", "y")
	.attr("class", "aText active y")
	.attr("Lack Healthcare (%)");


d3.csv("assets/data/data.csv").then(function(data){
	visualize(data);
});

function visualize(theData){
	var curX = "poverty";
	var curY = "healthcare";

	var xMin;
	var xMax;
	var yMin;
	var yMax;

	function xMinMax(){
		xMin = d3.min(theData, function(d){
			return parseFloat(d[curX]) * 0.90;
		});

		xMax = d3.max(theData, function(d){
			return parseFloat(d[curX]) * 1.10;
		});		
	}

	function yMinMax(){
		yMin = d3.min(theData, function(d){
			return parseFloat(d[curY]) * 0.90;
		});

		yMax = d3.max(theData, function(d){
			return parseFloat(d[curY]) * 1.10;
		});		
	}

}