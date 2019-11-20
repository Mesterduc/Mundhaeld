new Vue ({
    el: '#main',
    data: {
      newDate: '',
      dates: [
        {text: ''}
      ]
    },
    methods: {
      addDate: function(){
        var text = this.newDate.trim()
        if (text){
          this.dates.push({text: text})
          this.newDate = ''
        }
      },
      deleteDate(){
        
      }
    }
  })