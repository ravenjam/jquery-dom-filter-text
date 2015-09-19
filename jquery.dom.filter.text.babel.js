(function($) {

    $.fn.domFilterText = function (options) {
        let self = this;
        let opts = $.extend(true, {}, $.fn.domFilterText.defaults, options);

        let cacheCss = (targets) => {
            targets.each((i, el) => {
                $(el).data('display', $(el).css('display'));
            });

            if (targets.children().length) {
                cacheCss(targets.children());
            }
        };

        cacheCss(opts.filterTarget);

        return self.each((i, el) => {
            if (el.nodeName.toLowerCase() !== 'input' || el.type.toLowerCase() !== 'text') {
                console.warn(`(el.id ? el.id : 'Node') type is invalid, use <input type='text'> instead.`);
                return false;
            }

            $(self).on('keyup', (e) => {
                let filterVal = $(e.target).val();

                let filter = (targets) => {
                    targets.each((i, el) => {
                        $(el).css('display', $(el).data('display'));
                    });

                    let targetRemove = targets.filter((i, el) => {
                        let comparator = '';

                        if (opts.filterProperty === 'html') {
                            comparator = $(el).html();
                        } else {
                            comparator = $(el).filterProperty;
                        }

                        if (opts.caseSensitive) {
                            return comparator.indexOf(filterVal) < 0;
                        } else {
                            return comparator.toLowerCase().indexOf(filterVal.toLowerCase()) < 0;
                        }
                    });

                    targetRemove.not(e.target).css('display', 'none');

                    if (targets.children().length) {
                        filter(targets.children());
                    }
                };

                filter(opts.filterTarget);
            });
        });
    };


    $.fn.domFilterText.defaults = {
        filterTarget: $(document.body),
        filterProperty: 'html',
        caseSensitive: false
    };

}(jQuery));