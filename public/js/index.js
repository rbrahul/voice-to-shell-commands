
var vueApp = new Vue({
    el: "#app",
    data: {
        appName: 'Voice Commander',
        selectedEditableItem: null,
        commands: [{
            name: 'build',
            shellCommand: 'cd project && npm run build'
        },
        {
            name: 'log',
            shellCommand: 'git log'
        },
         {
            name: 'file',
            shellCommand: 'echo "Hello Dear, How is going on" > test.txt'
        }],
        formData: {
            name: '',
            shellCommand: ''
        }
    },
    mounted: function () {
        this.initCommander();
    },
    updated: function () {

    },
    methods: {
        saveCommand: function () {
            this.commands.push(this.formData);
            this.formData = {};
            this.initCommander();
        },
        deleteCommand: function (index) {
            var confirmDelete = confirm("Do you really want to delete this command item?");
            if (confirmDelete) {
                this.commands.splice(index, 1);
            }
            this.initCommander();
        },
        editCommand: function (index) {
            this.selectedEditableItem = index;
            this.formData = this.commands[index];
        },

        updateCommand: function (index) {
            this.commands[index] = this.formData;
            this.formData = {};
            this.selectedEditableItem = null;
            this.initCommander();
        },
        sendCommandToExecute: function (command) {
            var formData = JSON.stringify({ 'command': command });
            $.ajax({
                'url': '/voice-command',
                'method': 'POST',
                contentType: 'application/json',
                data: formData,
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    console.error(err);
                }

            });
            
        },
        initCommander: function () {
  if (annyang) {
      var that = this;
            this.commands.forEach(function (command) {
                var commandObj = {};
                
                commandObj.phrase = command.name;
                commandObj.callback = function () {
                    console.log("Executing",command.shellCommand);
                    that.sendCommandToExecute(command.shellCommand);
                };
                annyang.addCommandDynamically(commandObj);
            });
                annyang.addCallback('error', function (err) {
                    console.error("Some thing went wrong", err);
                });
                annyang.debug(true);
                annyang.addCallback('resultMatch', function (userSaid, commandText, phrases) {
                    console.log(userSaid); // sample output: 'hello'
                    console.log(commandText); // sample output: 'hello (there)'
                    console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
                });
            }
            annyang.start();
        }

    }
});
