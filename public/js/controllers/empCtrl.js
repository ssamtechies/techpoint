techpApp.controller("empCtrl",["$scope","emppSvc",function($scope,emppSvc){
    
    $scope.employee = {
        personalinfo : {
            firstname : 'Shilpi',
            lastname : 'Jain',
            username : 'shilpijain305',
            email : 'test@test.com',
            location : 'Fremont',
            accesslevel : 'Admin',
            lastlogin : {
                date : 'May 1, 2015',
                time : '10:00 am',
            },
            department : 'Marketing',
            phone : '6172612688',
            img : {
                src : "/img/bwoman.jpg"

            }
        },
        submissions : [{
            id : 1,
            candidateid : 100,
            date : 'June 3, 2015',
            vendor1 : 'TekSystems',
            client : 'Walmart',
            rate : 55
        },
        {
            id : 2,
            candidateid : 101,
            date : 'June 3, 2015',
            vendor1 : 'Prokrama',
            client : 'Kaiser',
            rate : 50
        },
        {
            id : 3,
            candidateid : 103,
            date : 'June 3, 2015',
            vendor1 : 'CTS',
            client : 'Visa',
            rate : 25
        }
                      
        ],
        interviews : [{
            id : 1,
            candidateid : 101,
            date : 'May 1, 2015',
            client : 'Wipro'
        },
        {
            id : 2,
            candidateid : 103,
            date : 'Jul 1, 2015',
            client : 'FRB'
        },
        {
            id : 3,
            candidateid : 103,
            date : 'May 1, 2015',
            client : 'Wipro'
        }],
        placements : [{
             id : 1,
             candidateid : 101,
             date: 'May 3, 2015',
             vendor : 'CTS',
             client : 'LinkedIn'
        }],
        candidates : [{
            id : 100,
            name : 'Sherryl V',
            email : 'sheryll@test.com',
            phone : '827-266-0987',
            batch : 'July 2015'
        },
        {
            id : 101,
            name : 'Tim Burner',
            email : 'tim@test.com',
            phone : '827-266-0987',
            batch : 'July 2015'
        }]
    }

    
}]);

techpApp.controller("tableHeaderCtrl" ,['$scope', function($scope){
    $scope.candidatestable = ['Id','Name','Email','Phone','Batch'];
    $scope.placementstable = ['Id', 'CandidateId', 'Date', 'Vendor', 'Client'];
    $scope.submissionstable = ['Id', 'CandidateId' , 'Date' , 'Vendor 1', 'Client' , 'Rate'];
    $scope.interviewstable = ['Id', 'CandidateId' , 'Date' , 'Vendor' , 'Client'];
}]);