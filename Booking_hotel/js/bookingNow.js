const unavailableDates = ["23/04/2025", "26/04/2025", "28/04/2025"];

function isUnavailable(date) {
  const d = ("0" + date.getDate()).slice(-2);
  const m = ("0" + (date.getMonth() + 1)).slice(-2);
  const y = date.getFullYear();
  return unavailableDates.includes(`${d}/${m}/${y}`);
}

$(function () {
    

  const datepickerOptions = {
    dateFormat: "dd/mm/yy",
    minDate: 0,
    beforeShowDay: date => isUnavailable(date) ? [false, "no-availability", "No Availability"] : [true, "", ""]
  };

  $("#checkin").datepicker({
    ...datepickerOptions,
    onSelect: function () {
      let minCheckout = new Date($("#checkin").datepicker("getDate"));
      minCheckout.setDate(minCheckout.getDate() + 1);
      $("#checkout").datepicker("option", "minDate", minCheckout);
    }
  });

  $("#checkout").datepicker({ ...datepickerOptions, minDate: +1 });

  let selectedDates = [];
  $("#calendar").datepicker({
    ...datepickerOptions,
    numberOfMonths: 2,
    onSelect: function (dateText) {
      selectedDates.push(dateText);
      if (selectedDates.length === 1) {
        $("#checkin").val(dateText);
      } else if (selectedDates.length === 2) {
        const [first, second] = selectedDates.map(d => $.datepicker.parseDate("dd/mm/yy", d));
        const [inDate, outDate] = first < second ? selectedDates : selectedDates.reverse();
        $("#checkin").val(inDate);
        $("#checkout").val(outDate);
      } else {
        selectedDates = [dateText];
        $("#checkin").val(dateText);
        $("#checkout").val("");
      }
    }
  });

  // $("#searchBtn").click(function () {
  //   const data = {
  //     hotel: $("#hotel").val(),
  //     checkin: $("#checkin").val(),
  //     checkout: $("#checkout").val(),
  //     adults: $("#adults").val(),
  //     children: $("#children").val(),
  //     infants: $("#infants").val()
  //   };

  //   if (!data.checkin || !data.checkout) {
  //     alert("Please select both check-in and check-out dates.");
  //     return;
  //   }

  //   alert(`Searching availability for:\nHotel: ${data.hotel}\nCheck-in: ${data.checkin}\nCheck-out: ${data.checkout}\nAdults: ${data.adults}, Children: ${data.children}, Infants: ${data.infants}`);
  // });

  
});
