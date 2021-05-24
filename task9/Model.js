class Model {
    _adList  = []

    constructor(adList){
        this._adList = adList
    }

    getPage (skip = 0, top = 10, filterConfig = undefined) {
        let elem = adList;
        if (filterConfig) {
            for (let item in filterConfig) {
                if (item === 'createdAt') {
                    elem = elem.filter(item => item.createdAt <= filterConfig.createdAt);
                }
                else if (item === 'validUntil') {
                    elem = elem.filter(item => item.validUntil >= filterConfig.validUntil);
                }
                else if (item === 'vendor') {
                    elem = elem.filter(item => item.vendor === filterConfig.vendor);
                }
                else {
                    return 'Error'
                }
            }
        }
        elem.sort(function (a, b) {
            return a.createdAt - b.createdAt;
        });
        return elem.slice(skip, skip + top);
    }


    get(id) {
        if (id.valueOf() > 0) {
            return adList.find(item => item.id == id)
        }
        return false;
    }

    static _validate(elem) {
        return typeof elem.id == 'string' && elem.id !== ""
            && typeof elem.description == 'string' && elem.description.length <= 200 && typeof elem.link == 'string' && elem.description !== ""
            && elem.createdAt instanceof Date && elem.createdAt !== ""
            && typeof elem.link == 'string'
            && typeof elem.vendor == 'string' && elem.vendor !== ""
            && elem.validUntil instanceof Date
            && Array.isArray(elem.hashTags)
            && typeof elem.discount == 'string' && elem.discount !== ""
            && elem.validUntil instanceof Date && elem.validUntil !== ""
    }

    add(newElem) {
        if (AdCollection._validate(newElem)) {
            adList.push(newElem)
            return adList
        }
        else return false
    }


    reviewValidate(review) {
        if(typeof review.reviewText !== 'string' || typeof review.username !== 'string' || Object.prototype.toString.call(review.date) !== '[object Date]') {
            return false;
        }
        return true;
    }

    validate(adItem) {
        if (adItem) {

            if (!adItem.id || (adItem.id && typeof adItem.id !== 'string')) {
                return false;
            }

            if (!adItem.title || ((adItem.title && (typeof adItem.title !== 'string') || (adItem.title.length > 100))))

                if (!adItem.description || (adItem.description && ((typeof adItem.description !== 'string') || (adItem.description.length > 250)))) {
                    return false;
                }

            if (!adItem.createdAt || Object.prototype.toString.call(adItem.createdAt) !== '[object Date]') {
                return false;
            }

            if (!adItem.link || typeof adItem.link !== 'string') {
                return false;
            }

            if (adItem.photoLink && typeof adItem.photoLink !== 'string') {
                return false;
            }

            if (adItem.hashTags && adItem.hashTags.some(hashTag => typeof hashTag !== 'string')) {
                return false;
            }

            if (!adItem.discount || typeof adItem.discount !== 'string'){
                return false;
            }

            if (!adItem.validUntil || Object.prototype.toString.call(adItem.validUntil) !== '[object Date]') {
                return false;
            }

            if (adItem.rating && (typeof adItem.rating !== 'number' || (adItem.rating < 0 && adItem.rating > 5))) {
                return false;
            }

            if (adItem.reviews && (adItem.reviews.some(review => !this.reviewValidate(review)))) {
                return false;
            }
        }

        return true;
    }

    edit(id, adItem) {
        var editingAd = this.get(id);

        if (adItem.description) {
            editingAd.description = adItem.description;
        }
        if (adItem.title) {
            editingAd.title = adItem.title;
        }
        if (adItem.photoLink) {
            editingAd.photoLink = adItem.photoLink;
        }
        if (adItem.hashTags) {
            editingAd.hashTags = adItem.hashTags;
        }
        if(adItem.discount) {
            editingAd.discount = adItem.discount;
        }
        if(adItem.validUntil) {
            editingAd.validUntil = adItem.validUntil;
        }
        if(adItem.link) {
            editingAd.link = adItem.link;
        }
        if (this.validate(editingAd)) {
            return adItem;
        }
        return false;
    }

    edit(id, propertyChange) {
        for (let item in propertyChange) {
            if (item === 'id' || item === 'vendor' || item === 'createdAt') {
                return 'Error'
            }
            if (item === 'discount') {
                adList.find(item => item.id === id).discount = propertyChange.discount
                return true
            }
            if (item === 'link'){
                adList.find(item => item.id === id).link = propertyChange.link
                return true
            }
            if (item === 'validUntil'){
                adList.find(item => item.id === id).validUntil = propertyChange.validUntil
                return true
            }
            if (item === 'description'){
                adList.find(item => item.id === id).description = propertyChange.description
                return true
            }
            if (item === 'hashTags'){
                adList.find(item => item.id === id).hashTags = propertyChange.hashTags
                return true
            }
        }
        return false
    }

    remove(id) {
        if (typeof id === 'string') {
            let i = adList.find(item => item.id === id);
            adList.splice(i, 1)
            return adList

        } else return false
    }

    addAll(array){
        let result = []
        for(let item of array) {
            if (AdCollection._validate(item)) {
                this._adList.push(item)
            }
            else {
                result.push(item)
            }
        }
        return result
    }

    clear(array) {
        return array = []
    }

}