import React from 'react'

const ProjectCard = ({data}: any) => {
    let href = data.href;
    let title = data.title;
    let image = data.image;
    let timeline = data.timeline;
    let link = data.link;
  return (
    <div>
      
<div
	className="flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg rounded-lg bg-card text-card-foreground"
>
	<a href={href || '#'} className="block cursor-pointer">
			<img className="h-40 w-full overflow-hidden object-cover object-top" src={image} alt={title} />
	</a>
	<div className="px-2 flex flex-col">
		<div className="space-y-1">
			<div className="mt-1 text-base">{title}</div>
			<time className="font-sans text-xs">{timeline}</time>
			<div className="hidden font-sans text-xs underline print:visible">
				{link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<div
				className="prose dark:prose-invert max-w-full text-pretty font-sans text-xs text-muted-foreground"
			>
				{data.des}
			</div>
		</div>
	</div>
	<div className="mt-auto flex flex-col px-2 text-pretty font-sans text-sm text-muted-foreground">
{
    data.tech.map(({tag, index}:any) =>{
return (
    <div key={index} className="mt-2 flex flex-wrap gap-1">
					<div className="rounded-lg px-1 py-0 text-[10px]" >
						{tag}
					</div>
			</div>
)
    })
}
			
	</div>
</div>
    </div>
  )
}

export default ProjectCard

