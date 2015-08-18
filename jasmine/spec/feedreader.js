$(function() {

    describe('RSS Feeds', function() {
        /* This test to makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has acceptable URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    describe('The menu', function() {
        /* This test ensures the menu element is
         * hidden by default.
         */
        it('menu hidden', function() {
            // Check if body class has the menu-hidden attribute
            expect($('body').attr('class')).toBe('menu-hidden');
        });
        /* This test ensures the menu changes
         * visibility when the menu icon is clicked.
        */
        it('menu toggles', function() {
            // Simulate clicking on the menu
            $('.menu-icon-link').trigger('click');
            // Check to see if body class has no attribute
            expect($('body').attr('class')).toBe('');
            // Simulate clicking on the menu again
            $('.menu-icon-link').trigger('click');
            // Check to see if the body class has menu-hidden attribute
            expect($('body').attr('class')).toBe('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        // Load the first feed in the array of feeds
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* Thi test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('has an entry', function() {
            // Check that the number of entries in the feed is more than 0
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var feed1, feed2;
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                // Load the html in the initial feed
                feed1 = $('.feed').html();
            });
            // Load a second feed
            loadFeed(1, done);
        });
        it('loads new feed', function() {
            // Load the html in the second feed
            feed2 = $('.feed').html();
            // Check that the html of the two feeds does not match
            expect(feed1 == feed2).toBe(false);
        });
     });
}());