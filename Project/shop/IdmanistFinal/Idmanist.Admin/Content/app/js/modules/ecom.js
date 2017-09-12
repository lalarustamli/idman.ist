import {
  chips
} from './chips';
var conversionStats = () => {
  if ($('#conversionStats').length) {
    var ctx = document.getElementById("conversionStats").getContext("2d");
    var datasets = {
      labels: ["Added to Cart", "Reached Checkout", "Purchased", "Cancelled"],
      datasets: [{
        label: "Conversion Funnel",
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1,
        data: [38, 32, 17, 3],
      }]
    }
    var barChartData = new Chart(ctx, {
      type: "bar",
      data: datasets,
      responsive: true
    });
  };
}
var salesStats = () => {
  if ($('#salesStats').length) {
    var ctx = document.getElementById("salesStats").getContext("2d");
    var randomScalingFactor = function() {
      return Math.round(Math.random() * 100)
    };
    var datasets = {
      labels: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
      datasets: [{
        label: "Credit Card",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        bezierCurve: true,
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }, {
        label: "PayPal",
        backgroundColor: "rgba(66, 165, 245,0.4)",
        borderColor: "rgba(66, 165, 245,1)",
        pointBorderColor: "rgba(66, 165, 245,1)",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "rgba(66, 165, 245,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        bezierCurve: true,
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }]
    }
    var lineChartData = new Chart(ctx, {
      type: "line",
      data: datasets,
      responsive: true
    });
  }
}
const todaysSales = () => {
  if ($('#totalSales').length) {
    var newSales = new ProgressBar.Circle('#totalSales', {
      color: '#fb4869',
      strokeWidth: 3,
      trailWidth: 3,
      duration: 1500,
      text: {
        value: '0%'
      },
      step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      }
    });
    newSales.animate(0.8);
  }
}
const newUsers = () => {
  if ($('#newSignups').length) {
    var newSignUps = new ProgressBar.Circle('#newSignups', {
      color: '#42a5f5',
      strokeWidth: 3,
      trailWidth: 3,
      duration: 1500,
      text: {
        value: '0%'
      },
      step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      }
    });
    newSignUps.animate(0.64);
  }
}
//http://summernote.org/getting-started/#run-summernote
const triggerSummerNoteEcom = () => {
  $('#add_product_desc, #edit_product_desc').summernote();
}
const triggerDropzoneEcom = () => {
  if (!Dropzone || !Dropzone.length) {
    Dropzone.autoDiscover = false;
    $('#product_add_images_form').dropzone({
      url: "/assets/file/upload",
      addRemoveLinks: true
    });
  }
}
const addProductTags = () =>{
  $('.chips-placeholder').material_chip({
    placeholder: '+Tag',
    secondaryPlaceholder: '+Tag',
    data: [{
      tag: 'Geometric',
    }, {
      tag: 'Nature',
    }],
  });
}
const editProductImg = () =>{
  $('.edit_product_img').slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear'
});
}
const orderTable = () =>{
  //Initialize and UI setup
  $('.order-table-wrapper table').DataTable({
    "aaSorting": [
      [2, 'asc']
    ]
  });
}
const customerTable = () =>{
  //Initialize and UI setup
  $('.customer-table-wrapper table').DataTable({
    "aaSorting": [
      [2, 'asc']
    ]
  });
}
export {
  salesStats,
  conversionStats,
  todaysSales,
  newUsers,
  triggerSummerNoteEcom,
  triggerDropzoneEcom,
  addProductTags,
  editProductImg,
  orderTable,
  customerTable
}
