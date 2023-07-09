const AppModel = require('../model/app.model')

const projectService = {
    createApp: async (appData)=>{
        const app = new AppModel(appData)
        await app.save()
    },

    deleteApp: async (appId)=>{
        await AppModel.findByIdAndDelete(appId)
    },

    getApp: async(appId)=>{
        var app = await AppModel.findOne(appId)
        return app
    },

    getAppList: async(projectId)=>{
        var apps = await AppModel.find({projectId:projectId}) 
        return apps
    }
}

module.exports = projectService