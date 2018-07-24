

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

    return {
        id : id,
        nameFirst : nameFirst,
        nameLast : nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //var nameFull =[]; 
    var contactList; 
    var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact);
        },
        findContact: function(fullName){
        //split string into an array
            var splitNames =fullName.split(' ');
            //search for any instances of the array inside contactList (seek a boolean return)
                //if true return that contact object
            for (var nameObj in contacts){
                if (contacts[nameObj].nameFirst === splitNames[0]) return contacts[nameObj];      //consider maybe checking whether any indexes in splitnames match Object.values(contactList) returned array of values
                if (contacts[nameObj].nameLast === splitNames[1]) return contacts[nameObj];       //this logic will have problems if two names arent passed in appropiately:-/
                
            }
            //else if return undefined
            return undefined;
        },
        removeContact: function(contact){
            for(var i=0; i<contacts.length;i++){
                if(contacts[i] === contact) contacts.splice(i,1);
                //break;
            }
        },
        printAllContactNames: function() {
            let nameFull =[];
            for(var nameObj in contacts){
                nameFull.push(contacts[nameObj].nameFirst + " " + contacts[nameObj].nameLast);
            }
            contactList = nameFull.join('\n');
            return contactListd;
        }
    };
                //printAllContactNames: function(){
            //need to join contact.nameFirst with contact.nameLast
        //}
    
        
        /*    for(var nameObj in contacts){
                nameFull.push(contacts[nameObj].nameFirst + " " + contacts[nameObj].nameLast); 
                //console.log(nameFull);
            }
            contactList = nameFull.join('\n');
        */
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}