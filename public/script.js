
const price = 8.99;
new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [],
    cart: [],
  },
  methods: {
    addItem: function(index) {
      this.total+=price;
      const item = this.items[index];
      let found = false;
      for(var i=0; i<this.cart.length; i++) {
        if(this.cart[i].id.id === item.id){
          found = true;
          this.cart[i].qty++;
        }
      }
      if(!found) {
        this.cart.push({
          id: item,
          title: item.title,
          qty: 1,
          price,
        });
      }


    },
    getItems: function(keyword) {
      fetch(`/search/${keyword}`).then(response => {
        response.json().then(items => this.items = items);
      })
    }
  }
}).getItems('Arsenal');
