/* -------------------------------------------------------
   FLASHCARD DATA — CLEAN, CORRECT, REWRITTEN VERSION
   Using image paths: images/<slug>/<slug+number>.png
------------------------------------------------------- */

let cards = {

    /* -------------------- NETWORKING -------------------- */
"Networking": [
    {
        category: "Networking",
        question: "What is a LAN?",
        hint: "Used in homes, schools and small offices.",
        answer: "A LAN (Local Area Network) connects devices within a small geographical area such as one building.",
        image: "images/networking/networking1.png"
    },
    {
        category: "Networking",
        question: "What is a WAN?",
        hint: "Covers long distances like cities or countries.",
        answer: "A WAN (Wide Area Network) spans large geographical areas and connects multiple LANs together.",
        image: "images/networking/networking2.png"
    },
    {
        category: "Networking",
        question: "What is a router?",
        hint: "Directs traffic between networks.",
        answer: "A router forwards data between networks and chooses the best path for data to travel.",
        image: "images/networking/networking3.png"
    },
    {
        category: "Networking",
        question: "What does IP stand for?",
        hint: "Every device has an IP address.",
        answer: "IP stands for Internet Protocol — the set of rules that define how data is addressed and sent on a network.",
        image: "images/networking/networking4.png"
    },
    {
        category: "Networking",
        question: "What is an IP address?",
        hint: "Identifies a device on a network.",
        answer: "An IP address is a unique number assigned to a device so it can communicate on a network or the Internet.",
        image: "images/networking/networking5.png"
    },
    {
        category: "Networking",
        question: "What is DNS used for?",
        hint: "Translates website names.",
        answer: "DNS (Domain Name System) converts human‑readable website names like google.com into IP addresses.",
        image: "images/networking/networking6.png"
    },
    {
        category: "Networking",
        question: "What is a switch?",
        hint: "Connects many devices inside a LAN.",
        answer: "A switch receives data packets and forwards them only to the intended device inside a LAN.",
        image: "images/networking/networking7.png"
    },
    {
        category: "Networking",
        question: "What is Ethernet?",
        hint: "A wired type of network connection.",
        answer: "Ethernet is a wired networking technology used to connect devices in a LAN.",
        image: "images/networking/networking8.png"
    },
    {
        category: "Networking",
        question: "What is Wi-Fi?",
        hint: "Wireless communication.",
        answer: "Wi‑Fi is a wireless networking technology that allows devices to connect without cables.",
        image: "images/networking/networking9.png"
    },
    {
        category: "Networking",
        question: "What is bandwidth?",
        hint: "Measured in Mbps or Gbps.",
        answer: "Bandwidth is the maximum amount of data that can be transferred per second on a network.",
        image: "images/networking/networking10.png"
    },
    {
        category: "Networking",
        question: "What is latency?",
        hint: "Delay in sending data.",
        answer: "Latency is the time it takes for data to travel from the sender to the receiver.",
        image: "images/networking/networking11.png"
    },
    {
        category: "Networking",
        question: "What is a modem?",
        hint: "Connects your network to your Internet provider.",
        answer: "A modem converts signals from your ISP into a form your network devices can use.",
        image: "images/networking/networking12.png"
    },
    {
        category: "Networking",
        question: "What is the Internet?",
        hint: "A global network of networks.",
        answer: "The Internet is a worldwide system of connected networks that communicate using standard protocols.",
        image: "images/networking/networking13.png"
    },
    {
        category: "Networking",
        question: "What is a MAC address?",
        hint: "Hardware address of a network device.",
        answer: "A MAC address is a unique identifier assigned to a network interface card.",
        image: "images/networking/networking14.png"
    },
    {
        category: "Networking",
        question: "What is a firewall?",
        hint: "Protects against unwanted network traffic.",
        answer: "A firewall monitors and filters incoming and outgoing network traffic based on security rules.",
        image: "images/networking/networking15.png"
    },
    {
        category: "Networking",
        question: "What is a VPN?",
        hint: "Creates a secure private tunnel.",
        answer: "A VPN (Virtual Private Network) encrypts your Internet connection and hides your IP address.",
        image: "images/networking/networking16.png"
    },
    {
        category: "Networking",
        question: "What is a network protocol?",
        hint: "Agreed rules for communication.",
        answer: "A protocol is a set of rules that define how data is formatted and transmitted across networks.",
        image: "images/networking/networking17.png"
    },
    {
        category: "Networking",
        question: "What is HTTP?",
        hint: "Used to load webpages.",
        answer: "HTTP (HyperText Transfer Protocol) is the protocol for transferring webpage data over the Internet.",
        image: "images/networking/networking18.png"
    },
    {
        category: "Networking",
        question: "What is HTTPS?",
        hint: "Secure version of HTTP.",
        answer: "HTTPS encrypts webpage data to keep communication private and secure.",
        image: "images/networking/networking19.png"
    },
    {
        category: "Networking",
        question: "What is a hotspot?",
        hint: "Allows wireless Internet access.",
        answer: "A hotspot is a location where people can access Wi‑Fi provided by a router or mobile device.",
        image: "images/networking/networking20.png"
    }
],
"Hardware": [
    {
        category: "Hardware",
        question: "What does CPU stand for?",
        hint: "It performs most of the computer’s processing.",
        answer: "CPU stands for Central Processing Unit — the main processor of a computer.",
        image: "images/hardware/hardware1.png"
    },
    {
        category: "Hardware",
        question: "What does the CPU do?",
        hint: "Executes instructions.",
        answer: "The CPU carries out instructions and performs calculations needed for programs to run.",
        image: "images/hardware/hardware2.png"
    },
    {
        category: "Hardware",
        question: "What is CPU speed measured in?",
        hint: "Expressed in GHz.",
        answer: "CPU speed is measured in gigahertz (GHz), showing how many billions of cycles it can perform per second.",
        image: "images/hardware/hardware3.png"
    },
    {
        category: "Hardware",
        question: "What is RAM used for?",
        hint: "Temporary working data.",
        answer: "RAM stores data the computer is currently using, allowing fast access for running programs.",
        image: "images/hardware/hardware4.png"
    },
    {
        category: "Hardware",
        question: "What happens to RAM when the computer turns off?",
        hint: "Temporary storage.",
        answer: "RAM is volatile, meaning all data stored in it is cleared when the computer is powered off.",
        image: "images/hardware/hardware5.png"
    },
    {
        category: "Hardware",
        question: "What is a motherboard?",
        hint: "Central circuit board.",
        answer: "The motherboard connects and allows communication between all computer components.",
        image: "images/hardware/hardware6.png"
    },
    {
        category: "Hardware",
        question: "What is a GPU?",
        hint: "Handles visual output.",
        answer: "A GPU (Graphics Processing Unit) renders images, videos, and animations.",
        image: "images/hardware/hardware7.png"
    },
    {
        category: "Hardware",
        question: "What is a power supply unit (PSU)?",
        hint: "Provides electricity to components.",
        answer: "The PSU converts mains AC power to regulated DC power for computer components.",
        image: "images/hardware/hardware8.png"
    },
    {
        category: "Hardware",
        question: "What is a heat sink?",
        hint: "Helps cool the CPU.",
        answer: "A heat sink absorbs and disperses heat away from components like the CPU.",
        image: "images/hardware/hardware9.png"
    },
    {
        category: "Hardware",
        question: "What is thermal paste used for?",
        hint: "Heat transfer improvement.",
        answer: "Thermal paste fills microscopic gaps between the CPU and heat sink to improve heat transfer.",
        image: "images/hardware/hardware10.png"
    },
    {
        category: "Hardware",
        question: "What is a storage device?",
        hint: "Used to save files long‑term.",
        answer: "A storage device holds data permanently, such as SSDs, HDDs, and USB drives.",
        image: "images/hardware/hardware11.png"
    },
    {
        category: "Hardware",
        question: "What is BIOS?",
        hint: "Starts the hardware when powering on.",
        answer: "BIOS (Basic Input/Output System) initializes hardware during boot and loads the operating system.",
        image: "images/hardware/hardware12.png"
    },
    {
        category: "Hardware",
        question: "What is UEFI?",
        hint: "Modern BIOS replacement.",
        answer: "UEFI (Unified Extensible Firmware Interface) is a modern firmware system replacing traditional BIOS.",
        image: "images/hardware/hardware13.png"
    },
    {
        category: "Hardware",
        question: "What is a NIC?",
        hint: "Connects a device to a network.",
        answer: "A NIC (Network Interface Card) allows a computer to communicate on a network using a MAC address.",
        image: "images/hardware/hardware14.png"
    },
    {
        category: "Hardware",
        question: "What is an SSD?",
        hint: "Fast, no moving parts.",
        answer: "An SSD (Solid State Drive) stores data using flash memory and offers faster speeds than HDDs.",
        image: "images/hardware/hardware15.png"
    },
    {
        category: "Hardware",
        question: "What is an HDD?",
        hint: "Older spinning storage.",
        answer: "An HDD stores data on spinning magnetic disks and is slower than an SSD.",
        image: "images/hardware/hardware16.png"
    },
    {
        category: "Hardware",
        question: "What are computer ports?",
        hint: "Used to plug in devices.",
        answer: "Ports allow connection of external devices, such as USB, HDMI, and audio ports.",
        image: "images/hardware/hardware17.png"
    },
    {
        category: "Hardware",
        question: "What is a USB port used for?",
        hint: "Very common connector.",
        answer: "A USB port transfers data and provides power to connected devices.",
        image: "images/hardware/hardware18.png"
    },
    {
        category: "Hardware",
        question: "What is overclocking?",
        hint: "Increases CPU speed beyond normal settings.",
        answer: "Overclocking boosts a CPU or GPU's clock speed to increase performance, often producing more heat.",
        image: "images/hardware/hardware19.png"
    },
    {
        category: "Hardware",
        question: "What is computer hardware?",
        hint: "Anything you can touch.",
        answer: "Hardware refers to all the physical parts of a computer system.",
        image: "images/hardware/hardware20.png"
    }
],

"Internet & Email": [
    {
        category: "Internet & Email",
        question: "What is the World Wide Web?",
        hint: "It's made up of websites and webpages.",
        answer: "The World Wide Web is a collection of webpages and online resources accessed using a web browser.",
        image: "images/internet-email/internet-email1.png"
    },
    {
        category: "Internet & Email",
        question: "What is the Internet?",
        hint: "A global connection of networks.",
        answer: "The Internet is a worldwide network of interconnected computers that communicate using standard protocols.",
        image: "images/internet-email/internet-email2.png"
    },
    {
        category: "Internet & Email",
        question: "What does URL stand for?",
        hint: "It's the address of a webpage.",
        answer: "URL stands for Uniform Resource Locator — the address used to locate a webpage.",
        image: "images/internet-email/internet-email3.png"
    },
    {
        category: "Internet & Email",
        question: "What does HTTP stand for?",
        hint: "Used when loading websites.",
        answer: "HTTP stands for HyperText Transfer Protocol — the rules for transferring webpage data.",
        image: "images/internet-email/internet-email4.png"
    },
    {
        category: "Internet & Email",
        question: "What does HTTPS do?",
        hint: "It protects your communication.",
        answer: "HTTPS encrypts data between your browser and a website to keep it secure.",
        image: "images/internet-email/internet-email5.png"
    },
    {
        category: "Internet & Email",
        question: "What is a web browser?",
        hint: "Used to view websites.",
        answer: "A web browser is software used to access and display webpages, such as Chrome or Edge.",
        image: "images/internet-email/internet-email6.png"
    },
    {
        category: "Internet & Email",
        question: "What is a search engine?",
        hint: "Helps you find information online.",
        answer: "A search engine is a tool that searches the Internet for information based on keywords, like Google.",
        image: "images/internet-email/internet-email7.png"
    },
    {
        category: "Internet & Email",
        question: "What is an email?",
        hint: "Electronic message.",
        answer: "Email is a method of sending electronic messages and files over the Internet.",
        image: "images/internet-email/internet-email8.png"
    },
    {
        category: "Internet & Email",
        question: "What is an email attachment?",
        hint: "A file sent with a message.",
        answer: "An email attachment is a document, image, or other file sent along with an email.",
        image: "images/internet-email/internet-email9.png"
    },
    {
        category: "Internet & Email",
        question: "What does CC mean in email?",
        hint: "Sends a copy to someone.",
        answer: "CC (Carbon Copy) sends a copy of an email to additional recipients.",
        image: "images/internet-email/internet-email10.png"
    },
    {
        category: "Internet & Email",
        question: "What does BCC mean in email?",
        hint: "Others can't see who received it.",
        answer: "BCC (Blind Carbon Copy) sends a hidden copy of an email that other recipients cannot see.",
        image: "images/internet-email/internet-email11.png"
    },
    {
        category: "Internet & Email",
        question: "What is spam email?",
        hint: "Often unwanted or advertising.",
        answer: "Spam refers to unwanted, often promotional or fraudulent email messages.",
        image: "images/internet-email/internet-email12.png"
    },
    {
        category: "Internet & Email",
        question: "What is phishing?",
        hint: "Tries to steal your information.",
        answer: "Phishing is a cyberattack where someone pretends to be trustworthy to steal personal or financial information.",
        image: "images/internet-email/internet-email13.png"
    },
    {
        category: "Internet & Email",
        question: "What is a hyperlink?",
        hint: "You click on it.",
        answer: "A hyperlink is a clickable link that takes you to another webpage or document.",
        image: "images/internet-email/internet-email14.png"
    },
    {
        category: "Internet & Email",
        question: "What does downloading mean?",
        hint: "Bringing data to your device.",
        answer: "Downloading means transferring files from the Internet to your device.",
        image: "images/internet-email/internet-email15.png"
    },
    {
        category: "Internet & Email",
        question: "What does uploading mean?",
        hint: "Sending data from your device.",
        answer: "Uploading is sending files from your device to a server or website.",
        image: "images/internet-email/internet-email16.png"
    },
    {
        category: "Internet & Email",
        question: "What is bandwidth?",
        hint: "Affects how fast you can browse.",
        answer: "Bandwidth is the maximum amount of data that can be transferred through an Internet connection per second.",
        image: "images/internet-email/internet-email17.png"
    },
    {
        category: "Internet & Email",
        question: "What is an ISP?",
        hint: "Provides Internet access.",
        answer: "An ISP (Internet Service Provider) is a company that provides Internet access to customers.",
        image: "images/internet-email/internet-email18.png"
    },
    {
        category: "Internet & Email",
        question: "What is online safety?",
        hint: "Keep personal information secure.",
        answer: "Online safety involves protecting personal information and avoiding harmful online activity.",
        image: "images/internet-email/internet-email19.png"
    },
    {
        category: "Internet & Email",
        question: "What is cloud computing?",
        hint: "Uses online services instead of local programs.",
        answer: "Cloud computing delivers software, storage, and services over the Internet instead of on local devices.",
        image: "images/internet-email/internet-email20.png"
    }
],

"Software": [
    {
        category: "Software",
        question: "What is software?",
        hint: "It cannot be physically touched.",
        answer: "Software is a set of instructions or programs that tell a computer what to do.",
        image: "images/software/software1.png"
    },
    {
        category: "Software",
        question: "What does OS stand for?",
        hint: "Windows, macOS and Linux are examples.",
        answer: "OS stands for Operating System — software that manages hardware and provides services for applications.",
        image: "images/software/software2.png"
    },
    {
        category: "Software",
        question: "What is an operating system responsible for?",
        hint: "It manages hardware and files.",
        answer: "An operating system manages hardware, files, memory, and provides a platform for software to run.",
        image: "images/software/software3.png"
    },
    {
        category: "Software",
        question: "What does HTML stand for?",
        hint: "Used to create webpages.",
        answer: "HTML stands for HyperText Markup Language — the standard language used to structure webpages.",
        image: "images/software/software4.png"
    },
    {
        category: "Software",
        question: "What is application software?",
        hint: "Examples: Word, Excel, Photoshop.",
        answer: "Application software is designed for specific tasks like word processing, photo editing or browsing.",
        image: "images/software/software5.png"
    },
    {
        category: "Software",
        question: "What is system software?",
        hint: "Works behind the scenes.",
        answer: "System software manages and operates computer hardware, including operating systems and drivers.",
        image: "images/software/software6.png"
    },
    {
        category: "Software",
        question: "What is a driver?",
        hint: "Helps the OS communicate with hardware.",
        answer: "A driver is software that enables the operating system to interact with hardware devices.",
        image: "images/software/software7.png"
    },
    {
        category: "Software",
        question: "What is a computer virus?",
        hint: "Malicious program.",
        answer: "A computer virus is malicious software designed to damage, corrupt, or disrupt systems.",
        image: "images/software/software8.png"
    },
    {
        category: "Software",
        question: "What is antivirus software?",
        hint: "Protects against malware.",
        answer: "Antivirus software scans, detects, and removes viruses and other harmful software.",
        image: "images/software/software9.png"
    },
    {
        category: "Software",
        question: "What is a web browser?",
        hint: "Used to browse the Internet.",
        answer: "A web browser is software that allows you to access and view websites.",
        image: "images/software/software10.png"
    },
    {
        category: "Software",
        question: "What is cloud-based software?",
        hint: "Runs using the Internet instead of local installation.",
        answer: "Cloud-based software runs on remote servers and is accessed via the Internet.",
        image: "images/software/software11.png"
    },
    {
        category: "Software",
        question: "What is open-source software?",
        hint: "Its code is publicly available.",
        answer: "Open-source software is software whose source code is freely available for anyone to view, modify, and distribute.",
        image: "images/software/software12.png"
    },
    {
        category: "Software",
        question: "What is proprietary software?",
        hint: "Owned by companies, not freely editable.",
        answer: "Proprietary software is owned by a company and its source code is not publicly accessible.",
        image: "images/software/software13.png"
    },
    {
        category: "Software",
        question: "What is a file extension?",
        hint: "Examples: .docx, .jpg, .pdf",
        answer: "A file extension identifies the file type and tells the OS which software should open it.",
        image: "images/software/software14.png"
    },
    {
        category: "Software",
        question: "What is a software update?",
        hint: "Improves features or security.",
        answer: "A software update adds improvements, fixes bugs, and enhances security for applications or systems.",
        image: "images/software/software15.png"
    },
    {
        category: "Software",
        question: "What is firmware?",
        hint: "Software stored permanently on hardware.",
        answer: "Firmware is low-level software stored on hardware devices to control their functions.",
        image: "images/software/software16.png"
    },
    {
        category: "Software",
        question: "What is a GUI?",
        hint: "Windows, icons, buttons.",
        answer: "A GUI (Graphical User Interface) allows users to interact with software visually using icons and menus.",
        image: "images/software/software17.png"
    },
    {
        category: "Software",
        question: "What is a command line interface?",
        hint: "Text-based control.",
        answer: "A command line interface (CLI) allows users to type commands to control a computer.",
        image: "images/software/software18.png"
    },
    {
        category: "Software",
        question: "What is a patch?",
        hint: "Fixes issues.",
        answer: "A patch is software designed to fix bugs or security vulnerabilities in existing programs.",
        image: "images/software/software19.png"
    },
    {
        category: "Software",
        question: "What is a software license?",
        hint: "Legal permission to use software.",
        answer: "A software license defines how software can be used, shared, or installed.",
        image: "images/software/software20.png"
    }
],

"Files & Data": [
    {
        category: "Files & Data",
        question: "What is a bit?",
        hint: "It is the smallest unit of data.",
        answer: "A bit is a single binary value, either 0 or 1, representing the smallest unit of data in computing.",
        image: "images/files-data/files-data1.png"
    },
    {
        category: "Files & Data",
        question: "What is a byte?",
        hint: "Made up of 8 bits.",
        answer: "A byte is a group of 8 bits and typically represents a single character like a letter or symbol.",
        image: "images/files-data/files-data2.png"
    },
    {
        category: "Files & Data",
        question: "What is a kilobyte (KB)?",
        hint: "About one thousand bytes.",
        answer: "A kilobyte is approximately 1,024 bytes of data.",
        image: "images/files-data/files-data3.png"
    },
    {
        category: "Files & Data",
        question: "What is a megabyte (MB)?",
        hint: "Often used to measure file size.",
        answer: "A megabyte is approximately 1,024 kilobytes.",
        image: "images/files-data/files-data4.png"
    },
    {
        category: "Files & Data",
        question: "What is a gigabyte (GB)?",
        hint: "Large storage unit.",
        answer: "A gigabyte is approximately 1,024 megabytes and is commonly used to measure storage capacity.",
        image: "images/files-data/files-data5.png"
    },
    {
        category: "Files & Data",
        question: "What is a terabyte (TB)?",
        hint: "Used for very large drives.",
        answer: "A terabyte is approximately 1,024 gigabytes.",
        image: "images/files-data/files-data6.png"
    },
    {
        category: "Files & Data",
        question: "What is file compression?",
        hint: "Reduces file size.",
        answer: "File compression reduces the size of a file so it takes up less storage space and is faster to share.",
        image: "images/files-data/files-data7.png"
    },
    {
        category: "Files & Data",
        question: "What does a file extension indicate?",
        hint: "Examples: .jpg, .pdf, .mp3",
        answer: "A file extension indicates the file type and determines which software can open it.",
        image: "images/files-data/files-data8.png"
    },
    {
        category: "Files & Data",
        question: "What is metadata?",
        hint: "Data about data.",
        answer: "Metadata provides information about a file, such as size, date created, and author.",
        image: "images/files-data/files-data9.png"
    },
    {
        category: "Files & Data",
        question: "What is cloud storage?",
        hint: "Stores files online instead of locally.",
        answer: "Cloud storage saves data on remote servers accessed through the Internet.",
        image: "images/files-data/files-data10.png"
    },
    {
        category: "Files & Data",
        question: "What does 'backing up data' mean?",
        hint: "Protects against data loss.",
        answer: "Backing up means making a copy of files to protect against loss or corruption.",
        image: "images/files-data/files-data11.png"
    },
    {
        category: "Files & Data",
        question: "What is a file path?",
        hint: "Shows where the file is stored.",
        answer: "A file path is the location of a file within the computer's folder structure.",
        image: "images/files-data/files-data12.png"
    },
    {
        category: "Files & Data",
        question: "What is data encryption?",
        hint: "Protects information by scrambling it.",
        answer: "Encryption converts data into a coded form so only authorised people can read it.",
        image: "images/files-data/files-data13.png"
    },
    {
        category: "Files & Data",
        question: "What is a database?",
        hint: "Stores information in an organised way.",
        answer: "A database is a structured collection of data stored electronically and accessed using queries.",
        image: "images/files-data/files-data14.png"
    },
    {
        category: "Files & Data",
        question: "What is structured data?",
        hint: "Organised into rows and columns.",
        answer: "Structured data is organised and easy to search, like spreadsheets or tables.",
        image: "images/files-data/files-data15.png"
    },
    {
        category: "Files & Data",
        question: "What is unstructured data?",
        hint: "Examples: videos, images, emails.",
        answer: "Unstructured data does not follow a specific format and is harder for computers to analyse.",
        image: "images/files-data/files-data16.png"
    },
    {
        category: "Files & Data",
        question: "What is a CSV file?",
        hint: "Stores data separated by commas.",
        answer: "A CSV (Comma Separated Values) file stores tabular data in plain text, with commas separating values.",
        image: "images/files-data/files-data17.png"
    },
    {
        category: "Files & Data",
        question: "What is a PDF file?",
        hint: "A common document format.",
        answer: "A PDF (Portable Document Format) preserves document formatting across devices.",
        image: "images/files-data/files-data18.png"
    },
    {
        category: "Files & Data",
        question: "What is a directory?",
        hint: "Another word for folder.",
        answer: "A directory is a container used to organise files on a computer.",
        image: "images/files-data/files-data19.png"
    },
    {
        category: "Files & Data",
        question: "What does 'file corruption' mean?",
        hint: "Happens when a file becomes damaged.",
        answer: "File corruption means a file cannot be opened or used because its data has become damaged.",
        image: "images/files-data/files-data20.png"
    }
],

"Output Devices": [
    {
        category: "Output Devices",
        question: "What is a monitor?",
        hint: "Displays text, images, and video.",
        answer: "A monitor is an output device that visually displays information from a computer.",
        image: "images/output-devices/output-devices1.png"
    },
    {
        category: "Output Devices",
        question: "What is a speaker?",
        hint: "Outputs sound.",
        answer: "Speakers are output devices that convert digital audio signals into sound.",
        image: "images/output-devices/output-devices2.png"
    },
    {
        category: "Output Devices",
        question: "What is a printer?",
        hint: "Produces hard copies.",
        answer: "A printer is an output device that creates physical copies of digital documents or images.",
        image: "images/output-devices/output-devices3.png"
    },
    {
        category: "Output Devices",
        question: "What is a projector used for?",
        hint: "Displays on a large screen.",
        answer: "A projector outputs visual information onto a wall or screen for large displays.",
        image: "images/output-devices/output-devices4.png"
    },
    {
        category: "Output Devices",
        question: "What does DPI measure?",
        hint: "Used for print quality.",
        answer: "DPI (Dots Per Inch) measures printer resolution — higher DPI means sharper quality.",
        image: "images/output-devices/output-devices5.png"
    },
    {
        category: "Output Devices",
        question: "What does PPI measure?",
        hint: "Used for screen sharpness.",
        answer: "PPI (Pixels Per Inch) measures the pixel density of screens, affecting clarity and detail.",
        image: "images/output-devices/output-devices6.png"
    },
    {
        category: "Output Devices",
        question: "What is a 3D printer?",
        hint: "Creates physical objects.",
        answer: "A 3D printer builds objects layer‑by‑layer using materials like plastic or resin.",
        image: "images/output-devices/output-devices7.png"
    },
    {
        category: "Output Devices",
        question: "What is a plotter?",
        hint: "Used for large drawings like blueprints.",
        answer: "A plotter prints large‑scale line drawings using pens controlled by the computer.",
        image: "images/output-devices/output-devices8.png"
    },
    {
        category: "Output Devices",
        question: "What is an interactive whiteboard?",
        hint: "Large touchscreen used in classrooms.",
        answer: "An interactive whiteboard displays output while allowing touch input for teaching or presenting.",
        image: "images/output-devices/output-devices9.png"
    },
    {
        category: "Output Devices",
        question: "What is a headset?",
        hint: "Includes headphones with microphone.",
        answer: "A headset outputs sound through earphones and may include an input microphone.",
        image: "images/output-devices/output-devices10.png"
    },
    {
        category: "Output Devices",
        question: "What is a sound card responsible for?",
        hint: "Handles audio output.",
        answer: "A sound card processes and outputs audio signals to speakers or headphones.",
        image: "images/output-devices/output-devices11.png"
    },
    {
        category: "Output Devices",
        question: "What is a VR headset?",
        hint: "Immersive virtual environment.",
        answer: "A VR headset outputs stereoscopic images to simulate a virtual world around the user.",
        image: "images/output-devices/output-devices12.png"
    },
    {
        category: "Output Devices",
        question: "What is an e-paper display?",
        hint: "Used in eReaders.",
        answer: "An e-paper display outputs text and images using low-power, paper-like screen technology.",
        image: "images/output-devices/output-devices13.png"
    },
    {
        category: "Output Devices",
        question: "What is an LCD?",
        hint: "A common flat-screen display.",
        answer: "LCD (Liquid Crystal Display) technology uses liquid crystals and a backlight to produce images.",
        image: "images/output-devices/output-devices14.png"
    },
    {
        category: "Output Devices",
        question: "What is an OLED display?",
        hint: "Each pixel emits its own light.",
        answer: "OLED displays use organic LEDs to produce bright, high‑contrast images without a backlight.",
        image: "images/output-devices/output-devices15.png"
    },
    {
        category: "Output Devices",
        question: "What is a dot matrix printer?",
        hint: "Uses pins to strike ink ribbon.",
        answer: "A dot matrix printer creates characters by striking pins against an ink-soaked ribbon.",
        image: "images/output-devices/output-devices16.png"
    },
    {
        category: "Output Devices",
        question: "What is a laser printer?",
        hint: "Fast, high quality prints.",
        answer: "A laser printer uses toner and a laser beam to produce sharp, high-quality prints.",
        image: "images/output-devices/output-devices17.png"
    },
    {
        category: "Output Devices",
        question: "What is an inkjet printer?",
        hint: "Sprays tiny droplets of ink.",
        answer: "An inkjet printer produces images and text by spraying microscopic droplets of ink onto paper.",
        image: "images/output-devices/output-devices18.png"
    },
    {
        category: "Output Devices",
        question: "What is haptic feedback?",
        hint: "Provides vibrations or physical responses.",
        answer: "Haptic feedback is an output method that provides tactile sensations to the user, such as vibrations.",
        image: "images/output-devices/output-devices19.png"
    },
    {
        category: "Output Devices",
        question: "What is an audio interface?",
        hint: "Used in music production.",
        answer: "An audio interface outputs high‑quality sound and connects microphones or instruments to a computer.",
        image: "images/output-devices/output-devices20.png"
    }
],

"Input Devices": [
    {
        category: "Input Devices",
        question: "What is a keyboard?",
        hint: "Used to enter letters and commands.",
        answer: "A keyboard is an input device used to type characters and issue commands to a computer.",
        image: "images/input-devices/input-devices1.png"
    },
    {
        category: "Input Devices",
        question: "What is a mouse?",
        hint: "Controls a pointer on screen.",
        answer: "A mouse is an input device used to move a pointer and interact with objects on the screen.",
        image: "images/input-devices/input-devices2.png"
    },
    {
        category: "Input Devices",
        question: "What is a touchscreen?",
        hint: "Acts as both input and display.",
        answer: "A touchscreen allows users to interact with a device by touching the screen directly.",
        image: "images/input-devices/input-devices3.png"
    },
    {
        category: "Input Devices",
        question: "What is a scanner?",
        hint: "Digitises physical documents.",
        answer: "A scanner converts physical documents or images into digital format for the computer.",
        image: "images/input-devices/input-devices4.png"
    },
    {
        category: "Input Devices",
        question: "What is a microphone?",
        hint: "Captures sound.",
        answer: "A microphone is an input device that captures audio and converts it into digital signals.",
        image: "images/input-devices/input-devices5.png"
    },
    {
        category: "Input Devices",
        question: "What is a graphics tablet?",
        hint: "Used for drawing digitally.",
        answer: "A graphics tablet lets users draw using a stylus, capturing natural hand movements digitally.",
        image: "images/input-devices/input-devices6.png"
    },
    {
        category: "Input Devices",
        question: "What is a webcam?",
        hint: "Captures video.",
        answer: "A webcam is an input device that captures video and streams it to the computer.",
        image: "images/input-devices/input-devices7.png"
    },
    {
        category: "Input Devices",
        question: "What is OCR?",
        hint: "Recognises printed text.",
        answer: "OCR (Optical Character Recognition) converts printed text in images into editable digital text.",
        image: "images/input-devices/input-devices8.png"
    },
    {
        category: "Input Devices",
        question: "What is a barcode scanner?",
        hint: "Reads black and white stripes.",
        answer: "A barcode scanner captures and interprets information from printed barcodes.",
        image: "images/input-devices/input-devices9.png"
    },
    {
        category: "Input Devices",
        question: "What is a fingerprint scanner?",
        hint: "Used for secure login.",
        answer: "A fingerprint scanner reads unique patterns on a person's finger for authentication.",
        image: "images/input-devices/input-devices10.png"
    },
    {
        category: "Input Devices",
        question: "What is an RFID reader?",
        hint: "Reads data wirelessly from tags.",
        answer: "An RFID reader uses radio waves to read information stored on RFID tags.",
        image: "images/input-devices/input-devices11.png"
    },
    {
        category: "Input Devices",
        question: "What is a game controller?",
        hint: "Used for playing games.",
        answer: "A game controller provides input through buttons, triggers, and joysticks for gaming.",
        image: "images/input-devices/input-devices12.png"
    },
    {
        category: "Input Devices",
        question: "What is a trackpad?",
        hint: "Built into laptops.",
        answer: "A trackpad is a touch‑sensitive surface used to move the cursor and perform gestures.",
        image: "images/input-devices/input-devices13.png"
    },
    {
        category: "Input Devices",
        question: "What is a stylus?",
        hint: "Used for precise touchscreen input.",
        answer: "A stylus is a pen‑like tool used to interact with touchscreens and graphics tablets.",
        image: "images/input-devices/input-devices14.png"
    },
    {
        category: "Input Devices",
        question: "What is a joystick?",
        hint: "Used in simulation and gaming.",
        answer: "A joystick is an input device that allows directional movement control.",
        image: "images/input-devices/input-devices15.png"
    },
    {
        category: "Input Devices",
        question: "What is a sensor?",
        hint: "Detects physical changes.",
        answer: "A sensor collects data from the environment, such as light, motion, or temperature.",
        image: "images/input-devices/input-devices16.png"
    },
    {
        category: "Input Devices",
        question: "What is a digital camera?",
        hint: "Captures still images.",
        answer: "A digital camera captures photographs and transfers them to a computer for editing or storage.",
        image: "images/input-devices/input-devices17.png"
    },
    {
        category: "Input Devices",
        question: "What is handwriting recognition?",
        hint: "Converts written text to digital text.",
        answer: "Handwriting recognition software interprets and converts writing made with a stylus or touchscreen.",
        image: "images/input-devices/input-devices18.png"
    },
    {
        category: "Input Devices",
        question: "What is a magnetic stripe reader?",
        hint: "Common on credit cards.",
        answer: "A magnetic stripe reader scans data encoded in the magnetic strip of cards.",
        image: "images/input-devices/input-devices19.png"
    },
    {
        category: "Input Devices",
        question: "What is a biometric input device?",
        hint: "Uses physical characteristics.",
        answer: "A biometric input device identifies a user through features like fingerprints, face, or iris patterns.",
        image: "images/input-devices/input-devices20.png"
    }
],

"Storage": [
    {
        category: "Storage",
        question: "What is an HDD?",
        hint: "Uses spinning magnetic disks.",
        answer: "An HDD (Hard Disk Drive) stores data on spinning magnetic platters and is slower than SSDs.",
        image: "images/storage/storage1.png"
    },
    {
        category: "Storage",
        question: "What is an SSD?",
        hint: "No moving parts.",
        answer: "An SSD (Solid State Drive) stores data on flash memory chips and is much faster than an HDD.",
        image: "images/storage/storage2.png"
    },
    {
        category: "Storage",
        question: "What is an SD card?",
        hint: "Used in cameras and phones.",
        answer: "An SD card is a small portable storage device used in phones, cameras, and other devices.",
        image: "images/storage/storage3.png"
    },
    {
        category: "Storage",
        question: "What is a USB flash drive?",
        hint: "Portable plug‑in storage.",
        answer: "A USB flash drive is a small portable storage device that connects through a USB port.",
        image: "images/storage/storage4.png"
    },
    {
        category: "Storage",
        question: "What is optical storage?",
        hint: "Uses lasers to read data.",
        answer: "Optical storage uses lasers to read and write data on discs such as CDs, DVDs, and Blu‑ray discs.",
        image: "images/storage/storage5.png"
    },
    {
        category: "Storage",
        question: "What is cloud storage?",
        hint: "Files stored on the Internet.",
        answer: "Cloud storage keeps files on remote servers accessible through the Internet.",
        image: "images/storage/storage6.png"
    },
    {
        category: "Storage",
        question: "What does GB stand for?",
        hint: "A unit of file size.",
        answer: "GB stands for gigabyte, equal to roughly 1 billion bytes.",
        image: "images/storage/storage7.png"
    },
    {
        category: "Storage",
        question: "What does TB stand for?",
        hint: "Much larger than a GB.",
        answer: "TB stands for terabyte, equal to about 1,024 gigabytes.",
        image: "images/storage/storage8.png"
    },
    {
        category: "Storage",
        question: "What is a Blu‑ray disc?",
        hint: "High‑capacity optical storage.",
        answer: "A Blu‑ray disc is an optical disc that can store large amounts of HD video and data using blue lasers.",
        image: "images/storage/storage9.png"
    },
    {
        category: "Storage",
        question: "What is read speed?",
        hint: "Measures how fast data can be accessed.",
        answer: "Read speed indicates how quickly a storage device can retrieve data, usually measured in MB/s.",
        image: "images/storage/storage10.png"
    },
    {
        category: "Storage",
        question: "What is write speed?",
        hint: "How fast data can be saved.",
        answer: "Write speed measures how quickly data can be written to a storage device.",
        image: "images/storage/storage11.png"
    },
    {
        category: "Storage",
        question: "What is non‑volatile memory?",
        hint: "Keeps data when power is off.",
        answer: "Non‑volatile memory retains stored data even when the device is powered off (e.g., SSD, HDD, flash).",
        image: "images/storage/storage12.png"
    },
    {
        category: "Storage",
        question: "What is volatile memory?",
        hint: "Loses data when powered off.",
        answer: "Volatile memory, such as RAM, requires power to maintain stored information.",
        image: "images/storage/storage13.png"
    },
    {
        category: "Storage",
        question: "What is RAID?",
        hint: "Combines multiple drives.",
        answer: "RAID (Redundant Array of Independent Disks) combines multiple drives to improve speed or reliability.",
        image: "images/storage/storage14.png"
    },
    {
        category: "Storage",
        question: "What is external storage?",
        hint: "Connects outside the computer.",
        answer: "External storage refers to removable devices like USB drives or external HDDs/SSDs.",
        image: "images/storage/storage15.png"
    },
    {
        category: "Storage",
        question: "What is a partition?",
        hint: "Divides a drive into sections.",
        answer: "A partition is a logical division of a storage device, treated as a separate drive by the OS.",
        image: "images/storage/storage16.png"
    },
    {
        category: "Storage",
        question: "What is file fragmentation?",
        hint: "Happens when files are split into pieces.",
        answer: "Fragmentation occurs when parts of a file are stored in different locations on a disk.",
        image: "images/storage/storage17.png"
    },
    {
        category: "Storage",
        question: "What is a backup?",
        hint: "Protects your data.",
        answer: "A backup is a copy of important files saved separately to prevent data loss.",
        image: "images/storage/storage18.png"
    },
    {
        category: "Storage",
        question: "What is long‑term storage?",
        hint: "Stores data for years.",
        answer: "Long‑term storage refers to devices designed to keep data safe for extended periods, such as HDDs or cloud archives.",
        image: "images/storage/storage19.png"
    },
    {
        category: "Storage",
        question: "What is write protection?",
        hint: "Prevents deleting or editing files.",
        answer: "Write protection prevents changes to data on a storage device to ensure it cannot be modified or erased.",
        image: "images/storage/storage20.png"
    }
]

};

/* -------------------------------------------------------
   AUTO‑GENERATE "ALL" CATEGORY
------------------------------------------------------- */
cards.ALL = Object.values(cards).flat();