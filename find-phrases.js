var _ = require('lodash');

function findPhrases(course, phrases) {
    phrases = phrases.trim().split(/\s*,\s*/);
    var labs = searchSectionNotes(course.labs, phrases);
    var lectures = searchSectionNotes(course.lectures, phrases);
    var phraseFound = labs.length > 0 || lectures.length > 0;

    return {
        labs: labs,
        lectures: lectures,
        phraseFound: phraseFound
    };
}

function searchSectionNotes(sections, phrases) {
    var result = [];

    sections.forEach(function(section) {
        var notes = section.notes;

        if (_.isArray(notes)) {
            notes = notes.filter(function(note) {
                return phrases.every(function(phrase) {
                    return note.indexOf(phrase) != -1;
                });
            });

            if (notes.length) {
                section = _.cloneDeep(section);
                section.notes = notes;
                result.push(section);
            }

        }
    });

    return result;
}

module.exports = findPhrases;
