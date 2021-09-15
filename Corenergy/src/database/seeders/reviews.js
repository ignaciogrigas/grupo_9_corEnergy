'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('reviews', [
      {"id":1,"titleReview":"Bar Review","comments":"vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus","stars":1,"productId":1},
      {"id":2,"titleReview":"Mat Review","comments":"odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla","stars":2,"productId":1},
      {"id":3,"titleReview":"Weight Review","comments":"proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices","stars":3,"productId":1},
      {"id":4,"titleReview":"Elastic-Band Review","comments":"lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis","stars":4,"productId":2},
      {"id":5,"titleReview":"Mat Review","comments":"magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque","stars":5,"productId":2},
      {"id":6,"titleReview":"Weight Review","comments":"tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor","stars":5,"productId":3},
      {"id":7,"titleReview":"Mat Review","comments":"justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum","stars":2,"productId":3},
      {"id":8,"titleReview":"Mat Review","comments":"quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet","stars":4,"productId":2},
      {"id":9,"titleReview":"Bar Review","comments":"aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi","stars":5,"productId":2},
      {"id":10,"titleReview":"Bar Review","comments":"sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat","stars":3,"productId":2},
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};