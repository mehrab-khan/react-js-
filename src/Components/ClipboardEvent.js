import React from 'react'

export default function ClipboardEvent() {
    function copy(){
        alert('You Copied This Text')
    }
    function cut(){
        alert('You cut the text')
    }
    function paste(){
        alert('Text Pasted')
    }
  return (
    <div>
        {/*when we copy this text it shows a alert*/}
      <p onCopy={copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere deleniti praesentium eaque nulla asperiores est vitae a ipsam unde, placeat soluta distinctio rem quae nostrum eveniet repellat exercitationem tempora cumque excepturi molestias rerum. Debitis quidem quasi eius quae nihil, necessitatibus eligendi a aliquid delectus, ab omnis suscipit voluptatem molestias soluta voluptas alias similique non, ea pariatur iusto repudiandae error unde tenetur? Explicabo dolores ut in, quisquam exercitationem accusamus possimus nemo? Eos numquam blanditiis, itaque, ratione fugiat dignissimos officia, reiciendis enim distinctio est eaque aspernatur quam voluptatem accusantium necessitatibus ipsum reprehenderit commodi ipsa vero repellat. Quo corporis hic cupiditate dolorum.</p>
        <br />
        {/*when we cut this text it shows a alert*/}
        <p onCut={cut}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas error et est ipsam debitis molestiae consequatur doloribus reprehenderit. Illum repudiandae, eum, aliquid recusandae pariatur perspiciatis necessitatibus quo ducimus velit nihil veniam autem ratione fuga reiciendis ex error deleniti accusantium animi odio consequuntur earum. Temporibus, distinctio ex, recusandae maiores doloremque earum ullam, molestias fugiat repellat aperiam rerum enim aut minima sunt asperiores. Debitis architecto blanditiis incidunt nostrum? Ipsam officiis error nulla eos optio similique expedita nihil vero reprehenderit repudiandae excepturi iusto laboriosam amet, ducimus fugiat et molestias! Numquam officia quos eos mollitia, corrupti optio veritatis iure dolores sapiente blanditiis? Tempore, enim.</p>
        {/*when we paste a text on this input field it shows a alert*/}
        <input type="text" onPaste={paste} />
    </div>
  )
}
