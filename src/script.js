var users = {
    
    data : false,
    
    
    get_all_data : function(func){
        
        // Alias
        var alias = ["active-users", "users", "user-groups"];

        // Get
        airscarp.plugin.shell.get(alias, function(x){
            
            if(!x.s){
                airscarp.error("Something went wrong!");
                return false;
            }
            
            // Save
            users.data = x.data;
            if(func !== undefined) func(users.data);
        });
    },
    
    
    show_active_users_table : function(){
        
        var data  = users.data["active_users"];
        var tbody = [];
        
        for(var i = 0; i < data.length; i++){

            tbody.push([
                "<tr>",
                    "<td>" + data[i]["USER"] + "</td>",
                    "<td>" + data[i]["TTY"] + "</td>",
                    "<td>" + data[i]["FROM"] + "</td>",
                    "<td>" + data[i]["LOGIN"] + "</td>",
                    "<td>" + data[i]["IDLE"] + "</td>",
                    "<td>" + data[i]["JCPU"] + "</td>",
                    "<td>" + data[i]["PCPU"] + "</td>",
                    "<td>" + data[i]["WHAT"] + "</td>",
                    "<td></td>",
                "</tr>",
            ].join(""));
        }
        
        $("#active-users-table tbody").html(tbody.join(""));
    },
    
    
    show_users_table : function(){
        
        var data  = users.data["users"];
        var tbody = [];
        
        for(var i = 0; i < data.length; i++){
            
            tbody.push([
                "<tr>",
                    "<td>" + data[i]["id"] + "</td>",
                    "<td><strong class='d-block'>" + data[i]["username"] + "</strong><small>" + data[i]["info"] + "</small></td>",
                    "<td>" + data[i]["group_id"] + "</td>",
                    "<td>" + data[i]["home"] + "</td>",
                    "<td>" + data[i]["shell"] + "</td>",
                    "<td></td>",
                "</tr>",
            ].join(""));
        }
        
        $("#users-table tbody").html(tbody.join(""));
    },
    
    show_user_groups_table : function(){
        
        var data  = users.data["user_groups"];
        var tbody = [];
        
        for(var i in data){
            
            tbody.push([
                "<tr>",
                    "<td>" + i + "</td>",
                    "<td>" + data[i] + "</td>",
                    "<td></td>",
                "</tr>",
            ].join(""));
        }
        
        $("#user-groups-table tbody").html(tbody.join(""));
    },
    
};