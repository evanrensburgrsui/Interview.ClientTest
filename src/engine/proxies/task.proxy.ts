import {apiBaseHeaders, apiBaseUrl} from "../common/common.constants";

export interface TaskDetailsModel {
  id: number;
  description: string;
  groupId: number;
}

export interface TaskGroupModel {
  id: number;
  name: string;
  selected: boolean;
}

export const getTasks = async (): Promise<Array<TaskDetailsModel>> => {
  try {
    const apiurl = `${apiBaseUrl}/tasks`;
    const apiinit = {
      headers: apiBaseHeaders,
      credentials: "omit",
    } as RequestInit;
    const apiresponse = await fetch(apiurl, apiinit);
    if (apiresponse && apiresponse.ok) {
      const apiresult = (await apiresponse.json()) as Array<TaskDetailsModel>;
      if (apiresult) return apiresult;
    }
    throw new Error("Empty or invalid api response");
  } catch (ex) {
    return await Promise.reject();
  }
};

export const getTaskGroups = async (): Promise<Array<TaskGroupModel>> => {
  try {
    const apiurl = `${apiBaseUrl}/taskgroups`;
    const apiinit = {
      headers: apiBaseHeaders,
      credentials: "omit",
    } as RequestInit;
    const apiresponse = await fetch(apiurl, apiinit);
    if (apiresponse && apiresponse.ok) {
      const apiresult = (await apiresponse.json()) as Array<TaskGroupModel>;
      if (apiresult) return apiresult;
    }
    throw new Error("Empty or invalid api response");
  } catch (ex) {
    return await Promise.reject();
  }
};

export const saveTask = async (task: TaskDetailsModel): Promise<Array<TaskDetailsModel>> => {
  try {
    const valid = task && task.description && task.groupId;
    if (valid) {
      let apiurl = `${apiBaseUrl}/tasks`;
      if (task.id) apiurl += `/${task.id}`;
      
      const apiinit = {
        method: task.id ? "PUT" : "POST",
        headers: apiBaseHeaders,
        credentials: "omit",
        body: JSON.stringify(task),
      } as RequestInit;
      const apiresponse = await fetch(apiurl, apiinit);
      if (apiresponse && apiresponse.ok) {
        const apiresult = (await apiresponse.json()) as Array<TaskDetailsModel>;
        if (apiresult) return apiresult;
      }
      throw new Error("Empty or invalid api response");
    }
    throw new Error("Cannot save an invalid task");
  } catch (ex) {
    return await Promise.reject();
  }
};

export const deleteTask = async (id: number): Promise<Array<TaskDetailsModel>> => {
  try {
    const valid = id > 0;
    if (valid) {
      let apiurl = `${apiBaseUrl}/tasks`;
      if (id) apiurl += `/${id}`;

      const apiinit = {
        method: "DELETE",
        headers: apiBaseHeaders,
        credentials: "omit",
      } as RequestInit;
      const apiresponse = await fetch(apiurl, apiinit);
      if (apiresponse && apiresponse.ok) {
        const apiresult = (await apiresponse.json()) as Array<TaskDetailsModel>;
        if (apiresult) return apiresult;
      }
      throw new Error("Empty or invalid api response");
    }
    throw new Error("Cannot save an invalid task");
  } catch (ex) {
    return await Promise.reject();
  }
};
