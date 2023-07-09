const ProjectModel = require('../model/project.model')

const projectService = {
    createProject: async (ProjectData)=>{
        const project = new ProjectModel(ProjectData)
        await project.save()
    },

    deleteProject: async (ProjectId)=>{
        await ProjectModel.findByIdAndDelete(ProjectId)
    },

    getProject: async(projectId)=>{
        var project = await ProjectModel.findOne(projectId)
        return project
    },

    getProjectList: async(userId)=>{
        var projects = await ProjectModel.find({userId:userId}) 
        return projects
    }
}

module.exports = projectService