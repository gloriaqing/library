	
	var myApp=angular.module('my-app',[]);
	myApp.controller('first',['$scope',function($scope){
		$scope.sa=[
		{id:'序号'},
		{id:'书名'},
		{id:'作者'},
		{id:'删除'},
		{id:'修改'}
		],
		$scope.num=[
			{id:1,bookName:'红楼梦',author:'施耐奄',del:'删除',modify:'修改'},
			{id:2,bookName:'西游记',author:'吴承恩',del:'删除',modify:'修改'},
			{id:3,bookName:'三国演义',author:'罗贯中',del:'删除',modify:'修改'}
		]
		$scope.col="id";
		$scope.desc=0;
		$scope.isShow=false;
		$scope.isHide=false;
		
		
		var idx=0;
		$scope.modify=function(idx){
			$scope.isShow=true;
			//获取当前文本框的值
			$scope.modifyId=$scope.num[idx].id;
			$scope.modifyBook=$scope.num[idx].bookName;
			$scope.modifyAuthor=$scope.num[idx].author;
			
           
			$scope.save=function(){
				$scope.isShow=false;
				//获取当前文本框的值
				$scope.num[idx].id=$scope.modifyId;
				$scope.num[idx].bookName=$scope.modifyBook;
				$scope.num[idx].author=$scope.modifyAuthor;
			}
			$scope.cancel=function(){
				$scope.isShow=false;
				
				
			}
			$scope.close=function(){
				$scope.isShow=false;
			}
		}

		$scope.addShow=function(){
			var newId=$scope.num.length+1;
			var delN="删除";
			var modifyN="修改";
		    var obj={"id":newId,"bookName":$scope.bookD,"author":$scope.authors,
		    "del":delN,"modify":modifyN};
			if($scope.bookD&&$scope.authors){
						
				$scope.bookD='';
				$scope.authors='';
				$scope.delN="删除";
				$scope.num.push(obj);
			}
		}

		
		
		$scope.del=function(idx){
			$scope.isHide=true;
			$scope.confirm=function(){
				$scope.num.splice(idx,1);
			   	for(var i=0;i<$scope.num.length;i++){
			   		$scope.num[i].id=i+1;
			   	}
			   $scope.isHide=false;	
			   	
			}
		    $scope.cancel=function(){
		    	 $scope.isHide=false;	
		    }
		    $scope.close=function(){
				$scope.isHide=false;
			}
		}
		
	}])
	
	$(".search input").focus();
	$('.dropdown-toggle').dropdown();