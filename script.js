import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"
const supabaseUrl = 'https://ditdxrktdzgcigyoazjf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdGR4cmt0ZHpnY2lneW9hempmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNDExMTAsImV4cCI6MjAyNTkxNzExMH0.EuWZ3jqO_zjuURqQG7EUFfq1ix3Svw8xeRikamtUZXg'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let {data: books, error} = await supabase
        .from('books')
        .select('*')


    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
    }
}

getBooks();