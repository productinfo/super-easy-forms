var CreateForm = require('./lib/CreateForm');
var CreateLambdaFunction = require('./lib/CreateLambda');
var CreateTemplate = require('./lib/CreateTemplate');
var ValidateTemplate = require('./lib/ValidateTemplate');
var CreateStack = require('./lib/CreateStack');
var UpdateStack = require('./lib/UpdateStack');
var DeleteStack = require('./lib/DeleteStack');
var GetApiUrl = require('./lib/GetApiUrl');
var Email = require('./lib/SesEmail');
var CreateIamUser = require('./lib/CreateIamUser')
var GetSubmissions = require('./lib/GetSubmissions')
var FormConfig = require('./lib/Config')
var {initBuild} = require('./build')

module.exports.GetSubmissions = GetSubmissions;
//ExportContacts
module.exports.CreateForm = CreateForm;
module.exports.CreateLambdaFunction = CreateLambdaFunction;
module.exports.CreateTemplate = CreateTemplate;
module.exports.ValidateTemplate = ValidateTemplate;
module.exports.CreateStack = CreateStack;
module.exports.UpdateStack = UpdateStack;
module.exports.DeleteStack = DeleteStack;
module.exports.GetApiUrl = GetApiUrl;
module.exports.VerifyDefaultEmail = Email.VerifyDefaultEmail;
module.exports.SesEmail = Email.SesEmail;
module.exports.VerifySesEmail = Email.VerifySesEmail;
module.exports.ValidateSesEmail = Email.ValidateSesEmail;
module.exports.CreateIamUser = CreateIamUser;
module.exports.ParseFields = FormConfig.ParseFields;
module.exports.AddConfigVariable = FormConfig.AddVar;
module.exports.Build = initBuild;
module.exports.CreateLabel = FormConfig.CreateLabel;
module.exports.FormSetup = FormConfig.CheckForm;