//angular.module('employee').value('emppSvc',{name : 'Samuel Jackson'});
function Emp(name){
    this.name = name;
}
    

techpApp.config(function($provide){
    $provide.provider('emppSvc',[function(){
        var name = null;
        this.setname = function(nameString){
           name = nameString; 
        };
        this.$get = [function(){
               return new Emp(name);
               }]
    }]);
});

techpApp.config(["emppSvcProvider" , function(emppSvcProvider){
    emppSvcProvider.setname('Sam V');
}]);

techpApp.filter("ratings" , function(){
    return function(input) {
        
        var rating = parseInt(input);
        var result = "";
        for (var i = 0 ; i<rating ; i++){
            result += '*';
        }
        
        return result;
    }
    
});