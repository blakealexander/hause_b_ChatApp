export default {
    props: ['msg'], //this is the message we will be recieving from the server 

    template: `
         <p> class="new-message" :class"{ 'my-message' : matchedID }">
         <span>{{msg.message.name}} says:</span>
         {{msg.message.content}}
         </p>
    `,

    data: function() {
        return {
            matchedID: this.$parent.socketID == this.msg.id
        }
    }
}