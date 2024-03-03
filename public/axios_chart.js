var dataSource = {
    datasets: [
        {
            data: [30, 350 ,90],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#454545',
                '#999999',
                '#000000',
            ]
        }
    ],
    labels: ['Eat out',
            'Rent',
            'Groceries',
            'Cellphone',
            'Gas',
            'Insurance',
            'Subscriptions'
    ]
};

function createChart() {
var ctx = document.getElementById('myChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: dataSource
});
}

function getBudget() {
    var apiUrl = "/budget";
    axios.get(apiUrl).then(function (res) {
      for (var i = 0; i < res.data.myBudget.length; i++) {
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
        dataSource.datasets[0].backgroundColor[i] =
          res.data.myBudget[i].colorCode;
      }
    createChart();
});
}

getBudget();