export interface PageType{
    archived:boolean
    cover?:any
    created_by: {
        object: string
        id: string
    }
    created_time: string
    icon?:any
    id:string
    last_edited_by:{
        object: 'user'
        id: string
    }
    last_edited_time:string
    object: "page"
    parent:{
        type: 'database_id'
        database_id: string
    }
    properties:
    {
        Created: {

        }
        Tags: {

        }
        Name: {
            id:string
            type:string
            title:{
                type:string
                text:{
                    content:string
                    link?:any
                }[]
                plain_text:string
                href?:string
            }[]
        }
    }
    public_url?:any
    url:string
}