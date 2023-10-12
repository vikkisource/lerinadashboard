
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'Apr', 'May'],
      datasets: [
        {
        label: 'Study',
        data: [12, 19, 3, 5, 2],
        borderWidth: 0,
        backgroundColor:'#FE9053',
        borderRadius:{
           
            bottomLeft:10,
            bottomRight:10,
        },
        borderSkipped:false,
        barPercentage:0.7
       
      },
      {
        label:'Exam',
        data:[18,22,7,10,8],
        borderWidth:0,
       
        borderRadius:{
            topLeft:10,
            topRight:10,
           
        },
        backgroundColor:'#F7EDE1',
        borderSkipped:false,
        barPercentage:0.7
      }
    ]
    },
    options: {
        plugins: {
        legend:{
            display:false,
        },
    },
      scales: {
        y: {
            stacked:true,
          beginAtZero: true,
          border: {
            dash: [15,10],
        },  
       
        },
        x: {
            stacked:true,
            grid: {
               display: false
            }
         }
      }
    }
  });

 

  function opendropmenu(evt,getname){
    
    
    var dropdownbox = document.getElementById(getname);
    dropdownbox.classList.toggle('active');
    evt.currentTarget.classList.toggle('active')
   
    
  }

  function myFunction(getname) {
   
    document.getElementById(getname).classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.lna-dropbtn')) {
      var dropdowns = document.getElementsByClassName("lna-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }