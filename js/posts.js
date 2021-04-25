$(document).ready(function () {
        // Posts
        let posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis explicabo voluptas repellat nesciunt veritatis deleniti maxime perspiciatis quisquam error sapiente cumque soluta ab temporibus eveniet, blanditiis repellendus nihil sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum modi nobis reiciendis unde saepe aperiam, nostrum a corrupti similique minus culpa quasi vero delectus. Animi magnam id ab debitis at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi praesentium, vitae dolores ipsum accusamus beatae, itaque quo cupiditate id ratione at atque rem aspernatur officiis molestias consectetur quidem,rerum illo!'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis explicabo voluptas repellat nesciunt veritatis deleniti maxime perspiciatis quisquam error sapiente cumque soluta ab temporibus eveniet, blanditiis repellendus nihil sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum modi nobis reiciendis unde saepe aperiam, nostrum a corrupti similique minus culpa quasi vero delectus. Animi magnam id ab debitis at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi praesentium, vitae dolores ipsum accusamus beatae, itaque quo cupiditate id ratione at atque rem aspernatur officiis molestias consectetur quidem,rerum illo!'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis explicabo voluptas repellat nesciunt veritatis deleniti maxime perspiciatis quisquam error sapiente cumque soluta ab temporibus eveniet, blanditiis repellendus nihil sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum modi nobis reiciendis unde saepe aperiam, nostrum a corrupti similique minus culpa quasi vero delectus. Animi magnam id ab debitis at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi praesentium, vitae dolores ipsum accusamus beatae, itaque quo cupiditate id ratione at atque rem aspernatur officiis molestias consectetur quidem,rerum illo!'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis explicabo voluptas repellat nesciunt veritatis deleniti maxime perspiciatis quisquam error sapiente cumque soluta ab temporibus eveniet, blanditiis repellendus nihil sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum modi nobis reiciendis unde saepe aperiam, nostrum a corrupti similique minus culpa quasi vero delectus. Animi magnam id ab debitis at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi praesentium, vitae dolores ipsum accusamus beatae, itaque quo cupiditate id ratione at atque rem aspernatur officiis molestias consectetur quidem,rerum illo!'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis explicabo voluptas repellat nesciunt veritatis deleniti maxime perspiciatis quisquam error sapiente cumque soluta ab temporibus eveniet, blanditiis repellendus nihil sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum modi nobis reiciendis unde saepe aperiam, nostrum a corrupti similique minus culpa quasi vero delectus. Animi magnam id ab debitis at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi praesentium, vitae dolores ipsum accusamus beatae, itaque quo cupiditate id ratione at atque rem aspernatur officiis molestias consectetur quidem,rerum illo!'
            }
        ];
        
        posts.forEach((item, index) => {
            let post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span>${item.date} </span>
            <p>
            ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
            </article>
            `;
            $('#posts').append(post)
        });
});