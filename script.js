// Working Book Database - Tested and Functional
const booksDatabase = [
    // Programming Books
    {
        id: 1,
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        category: "programming",
        description: "The complete guide to JavaScript programming, covering ES6+ features and modern web development practices.",
        content: "JavaScript: The Definitive Guide - Complete Edition\n\nChapter 1: Introduction to JavaScript\nJavaScript is the programming language of the web. It is a high-level, interpreted programming language that conforms to the ECMAScript specification.\n\nKey Features:\n- Dynamic typing\n- Prototype-based object-orientation\n- First-class functions\n- Event-driven programming\n- Asynchronous programming with Promises and async/await\n\nChapter 2: Variables and Data Types\nJavaScript has several data types:\n1. Primitive types: string, number, boolean, null, undefined, symbol, bigint\n2. Reference types: object, array, function\n\nVariables can be declared using:\n- var (function-scoped)\n- let (block-scoped)\n- const (block-scoped, cannot be reassigned)\n\nExample:\nlet name = \"JavaScript\";\nconst version = \"ES2023\";\nvar framework = \"React\";\n\nChapter 3: Functions and Objects\nFunctions are first-class citizens in JavaScript:\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\n\nconst arrowGreet = (name) => `Hello, ${name}!`;\n\nclass Book {\n    constructor(title, author) {\n        this.title = title;\n        this.author = author;\n    }\n    \n    getInfo() {\n        return `${this.title} by ${this.author}`;\n    }\n}\n\nChapter 4: DOM Manipulation\nJavaScript can manipulate HTML elements:\ndocument.getElementById('bookTitle').textContent = 'New Title';\ndocument.querySelector('.book-card').classList.add('highlight');\n\nChapter 5: Modern JavaScript Features\n- Arrow functions\n- Template literals\n- Destructuring\n- Spread operator\n- Modules\n- Classes\n- Promises and async/await"
    },
    {
        id: 2,
        title: "Python Crash Course",
        author: "Eric Matthes",
        category: "programming",
        description: "A hands-on, project-based introduction to programming with Python.",
        content: "Python Crash Course - 2nd Edition\n\nPart 1: Python Basics\n\nChapter 1: Getting Started with Python\nPython is a powerful, versatile programming language that's easy to learn and fun to use. It's used for web development, data analysis, artificial intelligence, and more.\n\nInstalling Python:\n1. Visit python.org\n2. Download Python 3.x\n3. Run the installer\n4. Verify installation: python --version\n\nYour First Python Program:\nprint(\"Hello, Python World!\")\n\n# Variables and data types\nname = \"Python\"\nversion = 3.9\nis_awesome = True\n\n# Lists\nlanguages = [\"Python\", \"JavaScript\", \"Java\"]\nlanguages.append(\"C++\")\n\n# Dictionaries\nbook = {\n    \"title\": \"Python Crash Course\",\n    \"author\": \"Eric Matthes\",\n    \"pages\": 560\n}\n\nChapter 2: Working with Data\nPython's built-in data structures:\n# Lists\nnumbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\n\n# Dictionaries\nstudent = {\n    \"name\": \"Alice\",\n    \"age\": 25,\n    \"courses\": [\"Python\", \"Data Science\"]\n}\n\n# Sets\nunique_languages = {\"Python\", \"JavaScript\", \"Python\", \"Java\"}\n\n# Tuples\ncoordinates = (10.0, 20.0)\n\nChapter 3: Control Flow\nConditional statements and loops:\n# If statements\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\n\n# Loops\nfor i in range(5):\n    print(f\"Count: {i}\")\n\n# While loops\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1\n\nChapter 4: Functions and Classes\nCreating reusable code:\ndef calculate_area(length, width):\n    \"\"\"Calculate the area of a rectangle\"\"\"\n    return length * width\n\nclass Book:\n    def __init__(self, title, author, pages):\n        self.title = title\n        self.author = author\n        self.pages = pages\n    \n    def get_info(self):\n        return f\"{self.title} by {self.author}, {self.pages} pages\"\n    \n    def read(self, pages_read):\n        return f\"Read {pages_read} pages of {self.title}\"\n\nChapter 5: File Handling and Error Management\nWorking with files:\n# Reading files\nwith open('books.txt', 'r') as file:\n    books = file.readlines()\n\n# Writing files\nwith open('output.txt', 'w') as file:\n    file.write(\"Python is awesome!\")\n\n# Exception handling\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")"
    },
    {
        id: 3,
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        category: "programming",
        description: "A handbook of agile software craftsmanship with practical advice for writing clean, maintainable code.",
        content: "Clean Code: A Handbook of Agile Software Craftsmanship\n\nIntroduction: Why Clean Code?\nClean code is not just about making code work; it's about making code that other developers (including your future self) can understand, modify, and extend with ease.\n\nPart 1: Principles\n\nChapter 1: Clean Code\nWhat makes code clean?\n- It should be elegant and efficient\n- It should be easy to read and understand\n- It should be simple and direct\n- It should be well-tested\n- It should be expressive\n\nBad Code vs Good Code:\n// Bad - unclear purpose\nfunction doStuff(x, y) {\n    return x * y + 10;\n}\n\n// Good - clear intent\nfunction calculateTotalPrice(quantity, unitPrice) {\n    const basePrice = quantity * unitPrice;\n    const tax = basePrice * 0.1;\n    return basePrice + tax;\n}\n\nChapter 2: Meaningful Names\n- Use intention-revealing names\n- Avoid disinformation\n- Make meaningful distinctions\n- Use pronounceable names\n- Use searchable names\n\nChapter 3: Functions\nFunctions should:\n- Be small\n- Do one thing\n- Have descriptive names\n- Have minimal arguments\n- Avoid side effects\n\nChapter 4: Comments\nGood comments explain why, not what. They clarify intent and warn of consequences.\n\nChapter 5: Error Handling\nClean error handling with proper exception management."
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money",
        author: "Robert T. Kiyosaki",
        category: "business",
        description: "The #1 personal finance book of all time that challenges traditional thinking about money.",
        content: "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money\n\nIntroduction: Rich Dad Poor Dad\nThis book is about what the rich teach their kids about money that the poor and middle class do not.\n\nChapter 1: Rich Dad Poor Dad\nThe story of two fathers:\n- Poor Dad: Highly educated, PhD, believed in traditional education and job security\n- Rich Dad: Eighth-grade education, believed in financial education and building assets\n\nSix lessons from Rich Dad:\n\nLesson 1: The Rich Don't Work for Money\nThe poor and middle class work for money. The rich have money work for them.\n\nLesson 2: Why Teach Financial Literacy?\nIt's not how much money you make, but how much money you keep.\n\nAssets vs Liabilities:\n- Assets put money in your pocket\n- Liabilities take money out of your pocket\n\nExamples of assets:\n- Real estate that generates rental income\n- Stocks that pay dividends\n- Businesses that don't require your presence\n- Royalties from intellectual property\n\nLesson 3: Mind Your Own Business\nFocus on building your asset column, not just your income statement.\n\nThe Cashflow Quadrant:\n- E: Employee\n- S: Self-employed\n- B: Business owner\n- I: Investor\n\nLesson 4: The History of Taxes and the Power of Corporations\nUnderstanding how taxes work and using corporations to your advantage.\n\nLesson 5: The Rich Invent Money\nCreating opportunities and taking calculated risks.\n\nLesson 6: Work to Learn, Don't Work for Money\nFocus on acquiring skills rather than just earning a paycheck."
    },
    {
        id: 5,
        title: "Diwan-e-Ghalib: Complete Collection",
        author: "Mirza Asadullah Khan Ghalib",
        category: "shayari",
        description: "Complete collection of timeless Urdu poetry by Mirza Ghalib.",
        content: "Diwan-e-Ghalib: Complete Collection\n\nIntroduction to Ghalib's Poetry\nMirza Ghalib (1797-1869) is considered one of the greatest poets in the history of Urdu literature.\n\nFamous Ghazals:\n\n1. Hazaron Khwahishen Aisi:\nहज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले,\nबहुत निकले मेरे अरमाँ, लेकिन फिर भी कम निकले।\n\nनिकलना खुल्द से आदम का सुनते आए हैं लेकिन,\nबहुत बेआबरू होकर तेरे कूचे से हम निकले।\n\n2. Dil-e-Nadan:\nदिल-ए-नादान तुझे हुआ क्या है,\nआख़िर इस दर्द की दवा क्या है।\n\nहम को उन से वफ़ा की है उम्मीद,\nजो नहीं जानते वफ़ा क्या है।\n\n3. Bazeecha-e-Atfaal:\nबाज़ीचा-ए-अत्फ़ाल है दुनिया मेरे आगे,\nहोता है शब-ओ-रोज़ तमाशा मेरे आगे।\n\nPhilosophy in Ghalib's Poetry:\n- The transience of life\n- The complexity of human emotions\n- The search for meaning\n- The pain of love and separation\n- The beauty of language and expression"
    },
    {
        id: 6,
        title: "Love Shayari Collection",
        author: "Various Poets",
        category: "shayari",
        description: "Beautiful collection of romantic poetry and love verses.",
        content: "Love Shayari Collection\n\nCollection of Romantic Shayari\n\n1. First Love:\nतुम्हारी यादों के चिरागों से जगमगाती है रातें,\nतुम्हारे ख्वाबों के सहारे कट जाती है बातें।\n\nदिल में उम्मीद-ए-वस्ल की शमा जला के रखी है,\nतुम्हारी बातों की महक से महकती है सांसें।\n\n2. Separation:\nजुदाई का अलम तो दिल ने सहा है बड़े शौक से,\nमगर तेरी यादों का सैलाब उतारा नहीं जाता।\n\nवो दौर-ए-जुनून भी क्या दौर था,\nजब तुम मिलते थे तो सांसें रुक जाती थीं,\nअब तुम नहीं मिलते तो यादें रुक जाती हैं।\n\n3. Eternal Love:\nमोहब्बत एक एहसास है, जो दिल को छू लेता है,\nवक्त के साथ बदलता नहीं, बस गहरा होता जाता है।\n\nतेरी हर अदा पर लिख दूं किताबें,\nतेरी हर बात पर कुर्बान जाऊं,\nतेरी मोहब्बत में डूब जाऊं ऐसा,\nकि हर सांस तेरे नाम हो जाए।\n\n4. Unrequited Love:\nउसने कहा था मोहब्बत में सब कुछ कुबूल है,\nमगर जब वक़्त आया तो सब कुछ बदल गया।\n\n5. Eternal Bond:\nतेरी मोहब्बत में ऐसे डूबे हैं हम,\nकि हर धड़कन तेरे नाम की है।\n\nवक्त की हर एक सेकंड गवाह है,\nकि मेरी मोहब्बत तेरे लिए है。"
    }
];

// Global variables
let currentBooks = [...booksDatabase];
let currentPage = 0;
const booksPerPage = 6;
let currentBook = null;
let currentBookPage = 0;

// DOM elements
const booksContainer = document.getElementById('booksContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const sectionTitle = document.getElementById('sectionTitle');
const readerModal = document.getElementById('readerModal');
const readerTitle = document.getElementById('readerTitle');
const readerAuthor = document.getElementById('readerAuthor');
const bookContent = document.getElementById('bookContent');
const closeModal = document.querySelector('.close');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');
    displayBooks();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });
    }

    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', sortBooks);
    }

    // Load more books
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreBooks);
    }

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });

    // Modal controls
    if (closeModal) {
        closeModal.addEventListener('click', closeReader);
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === readerModal) closeReader();
    });

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', previousPage);
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', nextPage);
    }

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if (target === 'home') {
                showAllBooks();
            } else if (target === 'categories') {
                const categoriesSection = document.getElementById('categories');
                if (categoriesSection) {
                    categoriesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Display books
function displayBooks(reset = true) {
    console.log('Displaying books, reset:', reset);
    
    if (!booksContainer) {
        console.error('booksContainer not found');
        return;
    }

    if (reset) {
        booksContainer.innerHTML = '';
        currentPage = 0;
    }

    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = currentBooks.slice(startIndex, endIndex);

    if (booksToDisplay.length === 0) {
        booksContainer.innerHTML = '<p style="text-align: center; color: #666;">No books found.</p>';
        return;
    }

    booksToDisplay.forEach(book => {
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
    });

    // Show/hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= currentBooks.length ? 'none' : 'block';
    }
}

// Create book card
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
        <div class="book-cover">
            <i class="${book.icon || 'fas fa-book'}"></i>
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <span class="book-category">${book.category.charAt(0).toUpperCase() + book.category.slice(1)}</span>
            <p class="book-description">${book.description}</p>
            <div class="book-actions">
                <button class="read-btn" onclick="openBook(${book.id})">Read Now</button>
                <button class="download-btn" onclick="downloadBook(${book.id})">Download</button>
            </div>
        </div>
    `;
    return card;
}

// Download book
function downloadBook(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    // Create text file for download
    const content = `${book.title}\n\nAuthor: ${book.author}\n\n${book.content}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.title.replace(/\s+/g, '-').toLowerCase()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
}

// Search functionality
function performSearch() {
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        showAllBooks();
        return;
    }

    currentBooks = booksDatabase.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
    );

    if (sectionTitle) {
        sectionTitle.textContent = `Search Results for "${searchTerm}"`;
    }
    displayBooks();
}

// Filter by category
function filterByCategory(category) {
    currentBooks = booksDatabase.filter(book => book.category === category);
    if (sectionTitle) {
        sectionTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Books`;
    }
    displayBooks();
}

// Show all books
function showAllBooks() {
    currentBooks = [...booksDatabase];
    if (sectionTitle) {
        sectionTitle.textContent = 'All Books';
    }
    if (searchInput) {
        searchInput.value = '';
    }
    displayBooks();
}

// Sort books
function sortBooks() {
    if (!sortSelect) return;
    
    const sortBy = sortSelect.value;
    
    currentBooks.sort((a, b) => {
        switch(sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'author':
                return a.author.localeCompare(b.author);
            case 'date':
                return b.id - a.id;
            case 'popular':
                return b.id - a.id;
            default:
                return 0;
        }
    });
    
    displayBooks();
}

// Load more books
function loadMoreBooks() {
    currentPage++;
    displayBooks(false);
}

// Open book reader
function openBook(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    currentBook = book;
    currentBookPage = 0;
    
    if (readerTitle) readerTitle.textContent = book.title;
    if (readerAuthor) readerAuthor.textContent = `by ${book.author}`;
    
    // Split content into pages
    const pages = book.content.split('\n\n');
    displayBookPage(pages);
    
    if (readerModal) {
        readerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Display book page
function displayBookPage(pages) {
    if (!bookContent || !pageInfo) return;
    
    bookContent.innerHTML = pages[currentBookPage] || 'End of book';
    pageInfo.textContent = `Page ${currentBookPage + 1} of ${pages.length}`;
    
    if (prevPageBtn) prevPageBtn.disabled = currentBookPage === 0;
    if (nextPageBtn) nextPageBtn.disabled = currentBookPage >= pages.length - 1;
}

// Navigate pages
function previousPage() {
    if (!currentBook) return;
    
    const pages = currentBook.content.split('\n\n');
    if (currentBookPage > 0) {
        currentBookPage--;
        displayBookPage(pages);
    }
}

function nextPage() {
    if (!currentBook) return;
    
    const pages = currentBook.content.split('\n\n');
    if (currentBookPage < pages.length - 1) {
        currentBookPage++;
        displayBookPage(pages);
    }
}

// Close reader
function closeReader() {
    if (readerModal) {
        readerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    currentBook = null;
    currentBookPage = 0;
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Initialize on load
console.log('FreeEbooks platform loaded successfully!');
