const mongoose = require('mongoose');
const surveyModel = mongoose.model('surveys');

async function createSurvey(surveyObject) {
    const survey = surveyObject.save();
    return survey;
}

async function registerRecipientResponse(surveyId, email, choice) {
    await surveyModel.updateOne({
        _id: surveyId,
        recipients: {
            $elemMatch: { email: email, responded: false }
        }
    },
    {
        $inc: { [choice]: 1 },
        $set: { 'recipients.$.responded': true },
        lastResponded: new Date()
    }
    );
}

module.exports = {
    createSurvey,
    registerRecipientResponse,
    surveyModel
}