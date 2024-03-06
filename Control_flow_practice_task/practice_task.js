let userRole = "dev";
let userAccess;

let enrolledMember = false;

let subscriber = false;

if(userRole === "Employee"){
    userAccess = "User can access Dietary services";
}
else if(enrolledMember){
    userAccess = "User can access Dietary Services and One-on-one interaction with a dietician";
}
else if(subscriber){
    userAccess = "User can partially access to facilities of Dietary Services";
}
else
{
    userAccess = "User need to enroll, or alteast subscribe first to avail these facilities";
}

console.log("User Access: ", userAccess);
