var aa = angular.module('Stu',[]);
  aa.controller('mainC',['$scope',function($scope){
    var color=['purple','green','blue','yellow','brown','pink','orange'];
    $scope.currentT = {};
    var ramind;

    if(localStorage.todos){
      $scope.todos = angular.fromJson(localStorage.todos);
    }else{
      $scope.todos = [];
    }


    var saveData = function(){
      localStorage.todos = angular.toJson($scope.todos)
    }

    $scope.addR = function(){
      var len = $scope.todos.length;
      var id = (len===0)?1001:Math.max.apply('',$scope.todos.map(function(v,i){
        return v.id;
      }))+1,
      ramind = {
        id:id,
        name:'新列表'+(len+1),
        theme:color[len%7],
        shixiang:[
          // {name:"adfasdfasdf",state:true,edit:false},
          // {name:"wertwertw",state:true,edit:false},
          // {name:"fhjghjkghjk",state:false,edit:false},
          // {name:"ttdfaew",state:false,edit:false},
          // {name:"xxdfadsg",state:true,edit:false},

        ],
      }
      $scope.todos.push(ramind)
      $scope.currentT = ramind;
      saveData();

    }
    $scope.showinfo = function(index){
      $scope.currentT = $scope.todos[index];
      $scope.num = index;
      // console.log($scope.currentT)
    }
    var shix
    $scope.addShi = function(){
      console.log(1)
      shix = {name:'',state:false,edit:true}
      $scope.currentT.shixiang.push(shix)
      $scope.todos[$scope.num] = $scope.currentT;
      saveData();
    }
    $scope.showNum = function(){
      var num = this.currentT.shixiang.filter(function(v,k){
        return v.state === true;
      })
      return num.length?num.length:0;
    }
    $scope.deleteS = function(){
      $scope.currentT.shixiang = $scope.currentT.shixiang.filter(function(v,i){
        return v.state===false;
      })
      console.log($scope.currentT.shixiang)
      $scope.todos[$scope.num] = $scope.currentT;
      saveData();
    }

  }])



$(function(){



  // self
  $('#remind-list').on('click','li',function(){
    // $('#remind-list li').removeClass('click');
    // $(this).toggleClass('click');
    // var color = $(this).attr('data-role')
    // $('.item-wrapper').attr('class','item-wrapper').addClass(color);
  })
  $('.hasdone').on('click',function(){
    // $(this).toggleClass('show-hide');
  })
  $('.new-project').on('click',function(){
    // $('.edit').removeClass('edit');
    // var li = '<li class="edit"><span class="show"><div class="img"></div></span><label >asdfasdfasd</label><p class="detial">详细信息</p></li>'
    // $('.project-list').append(li)
  })

  // angular






})
