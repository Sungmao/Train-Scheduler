// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKMvvgPsMvDjUruq0B2tD1fm9AmPgEHkU",
    authDomain: "train-scheduler-24958.firebaseapp.com",
    databaseURL: "https://train-scheduler-24958.firebaseio.com",
    storageBucket: "train-scheduler-24958.appspot.com",
};
  
firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";


$("#addInfor").on("click", function(){

	var trainName = $('#trainNameInput').val().trim();
	var destination = $('#destinationInput').val().trim();
	var firstTrainTime = $('#firstTrainTimeInput').val().trim();
	var frequency = $('#frequencyInput').val().trim();

	var trainNameTd = $('<td>').html(trainName);
	var destinationTd = $('<td>').html(destination);
	var firstTrainTimeTd = $('<td>').html(firstTrainTime);
	var frequencyTd = $('<td>').html(frequency);

	var tableRow = $('<tr>').append(trainNameTd, destinationTd, firstTrainTimeTd, frequencyTd);
	$('#trainInforView').append(tableRow);

	database.ref().push({
		trainName: trainName,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency
	});

	return false;


});

database.ref().on("child_added", function(childSnapshot){


	trainName = childSnapshot.val().trainName;
	destination = childSnapshot.val().destination;
	firstTrainTime = childSnapshot.val().firstTrainTime;
	frequency = childSnapshot.val().frequency;

	var trainNameTd = $('<td>').html(trainName);
	var destinationTd = $('<td>').html(destination);
	var firstTrainTimeTd = $('<td>').html(firstTrainTime);
	var frequencyTd = $('<td>').html(frequency);

	var tableRow = $('<tr>').append(trainNameTd, destinationTd, firstTrainTimeTd, frequencyTd);
	$('#trainInforView').append(tableRow);

}, function(errorObject) {

	console.log("Errors handled: " + errorObject.code);


});

