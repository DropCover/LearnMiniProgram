Page({
  data:{
    name:"Coderwhy",
    age:18,
    students:[
      { id: 110, name: "kobe", age: 30 },
      { id: 111, name: "james", age: 28 },
      { id: 112, name: "curry", age: 32 },
      {id:113,name:"why",age:17}
    ],
    counter:0
  },
  handleBtnClick(){
    //1.错误的做法：界面显示不会刷新
    //  this.data.counter += 1

    // 2.this.setData()
    this.setData({
      counter:this.data.counter += 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter -= 1
    })
  }
})