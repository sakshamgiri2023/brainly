interface TagsProps {
    tagTypes: "Productivity" | "Tech & Tool" | "Mindset" | "Learning & Skill" | "Workflows" | "Inspiration"
}


const Tags = ( props: TagsProps) => {
    return <div  className="px-3 py-1 text-lg rounded-2xl bg-blue-100 text-blue-500">
        #{props.tagTypes}
    </div>
}

export default Tags;