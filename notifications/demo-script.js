let myNotifier

function addNotificationToDefaultGroup() {
  myNotifier.pushNotification({
    title: 'Default Group notification',
    type: 'info',
  })
}

function removeNotificationsFromDefaultGroup() {
  myNotifier.removeNotifications('default')
}

function addTestGroup() {
  myNotifier.createEmptyGroup({
    id: 'test',
  })
}

function addTestNotification() {
  myNotifier.pushNotification({
    title: 'Test Group notification',
    type: 'success',
    groupId: 'test',
  })
}

function removeTestGroup() {
  myNotifier.removeNotifications('test')
}

function addNotifToGreedyGroup() {
  myNotifier.pushNotification({
    title: 'Greedy Group notification',
    type: 'warning',
    groupId: 'greedy',
  })
}

function removeGreedyGroup() {
  myNotifier.removeNotifications('greedy')
}

function addSuccessNotif() {
  myNotifier.pushNotification({
    title: 'Success',
    message: 'Notification',
    type: 'success',
  })
}

function addInfoNotification() {
  myNotifier.pushNotification({
    title: 'Info',
    message: 'Notification',
    type: 'info',
  })
}

function addWarningNotif() {
  myNotifier.pushNotification({
    title: 'Warning',
    message: 'Notification',
    type: 'warning',
  })
}

function addErrorNotif() {
  myNotifier.pushNotification({
    title: 'Error',
    message: 'Notification',
    type: 'error',
  })
}

function addTimeoutNotif() {
  myNotifier.pushNotification({
    closeInMS: 2000,
    title: 'Info',
    message: 'Notification with Timeout',
    type: 'info',
  })
}

/* <p>Removing notification</p> */

function removeAll() {
  myNotifier.removeNotifications()
}

let notifToRemove
function addInfoNotificationToRemove() {
  notifToRemove = myNotifier.pushNotification({
    title: 'Add notification',
    message: 'to remove it',
    type: 'info',
  })
}

function removeSpecificNotif() {
  notifToRemove.remove()
}

/* DEMONSTRAING THE DIRECTIONS */
let dirFromBottomMNModule, dirFromTopMNModule

function addSuccessNotifFromTopDir() {
  dirFromTopMNModule.unshiftNotification({
    message: 'Success',
    type: 'success'
  })
}

function addTimeoutNotifFromTopDir() {
  dirFromTopMNModule.unshiftNotification({
    closeInMS: 2000,
    message: 'Info',
    type: 'info'
  })
}

function addSuccessNotifFromBottomDir() {
  dirFromBottomMNModule.pushNotification({
    message: 'Success',
    type: 'success'
  })
}

function addTimeoutNotifFromBottomDir() {
  dirFromBottomMNModule.pushNotification({
    closeInMS: 2000,
    message: 'Info',
    type: 'info'
  })
}

/* DEMONSTRATING CUSTOMIZED NOTIFICATIONS */
let customizedNotifsModule

// define function which will return custom template
const customTemplateFunc = ({ title, message }) =>
  `
    <div class='custom-notification'>
      <span>${title}</span>
      <span>${message}</span>
      <span class='mn-close-btn custom-close-btn'>[x]</span>
    </div>
  `

function pushCustomNotif() {
  customizedNotifsModule.pushNotification({
    title: 'Hey',
    message: "I'm a custom notification",
    template: customTemplateFunc,
  })
}

function pullCustomizedNotifs() {
  customizedNotifsModule.removeNotifications()
}


document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    myNotifier = new ToastNotifier({
      container: '#notifications',
      onNotificationsCountChange: function(number) {
        console.info('Number of notifs [' + this.container + ']: ' + number)
      }
    })

    // add greedy group
    myNotifier.createEmptyGroup({
      id: 'greedy',
      greedy: true
    })

    myNotifier.pushNotification({
      title: 'Hello!',
      message: 'and Welcome ;)',
      type: 'info',
      closeInMS: 5000
    })

    myNotifier.pushNotification({
      message: 'Click buttons to add/remove the notifications',
      type: 'success',
      closeInMS: 7000
    })

    dirFromTopMNModule = new ToastNotifier({
      container: '#notifications-from-top',
      onNotificationsCountChange: function(number) {
        console.info('Number of notifs [' + this.container + ']: ' + number)
      }
    })

    dirFromBottomMNModule = new ToastNotifier({
      container: '#notifications-from-bottom',
      onNotificationsCountChange: function(number) {
        console.info('Number of notifs [' + this.container + ']: ' + number)
      }
    })

    customizedNotifsModule = new ToastNotifier({
      container: '#custom-notifications-container'
    })
  }
}
