

### ** Ch - 7 Memory Management in Operating Systems**

#### **Introduction**
Memory management is a critical function of an operating system (OS) responsible for managing and coordinating computer memory (RAM). It ensures that each process running on the system has sufficient memory to execute while optimizing the use of available resources. The OS is tasked with allocating and deallocating memory spaces and ensuring that one process cannot access the memory of another process (providing memory isolation).

Effective memory management enhances system performance, stability, and security by maximizing the utilization of available memory and preventing memory-related issues such as memory leaks or conflicts between processes.

---

### **Key Objectives of Memory Management**
1. **Memory Allocation**: Assign memory blocks to processes as needed, either statically (during compilation) or dynamically (during execution).
2. **Memory Protection**: Ensure that processes cannot interfere with each other's memory, enforcing memory isolation.
3. **Efficient Utilization**: Maximize the use of available memory to prevent wastage and optimize performance.
4. **Process Isolation**: Prevent one process from accessing another process's memory space to avoid unauthorized memory access.
5. **Swapping and Paging**: Move processes or parts of processes in and out of physical memory as needed to manage limited memory.

---

### **Memory Management Techniques**
- **Contiguous Memory Allocation**: Allocates a single contiguous block of memory to a process.
- **Paged Memory Allocation**: Divides memory into fixed-size blocks (pages) and allocates these pages to processes.
- **Segmentation**: Divides memory into variable-sized segments, with each segment representing a logical division (code, data, stack).
- **Virtual Memory**: Uses disk storage to extend physical memory, allowing processes to use more memory than is physically available.

Memory management techniques help optimize memory usage and maintain system performance by efficiently managing physical and virtual memory.

### **6.1 Swapping**

**Swapping** is a memory management technique used by operating systems to move processes between physical memory (RAM) and secondary storage (typically a disk) to ensure that the system runs efficiently even with limited physical memory.

---

#### **Key Concepts of Swapping**

1. **Allocation of Swap Space**:
   - Swap space is a dedicated area on the disk used to temporarily store processes that are not currently executing. 
   - It is typically set up during system initialization and can be a separate partition or a special file on the disk.
   - The size of the swap space is determined by the system's configuration, balancing the need for additional virtual memory and disk performance.

2. **Swapping Process Out**:
   - When the system runs low on physical memory or when a process is not actively needed, the OS may choose to "swap out" a process.
   - The process is moved from RAM to the swap space to free up memory for other active processes.
   - The process is saved to disk in a format that preserves its state so that it can be restored later.

3. **Swapping Process In**:
   - When a swapped-out process is needed again (for example, when it becomes active or is requested by the user), the OS will "swap it in" by moving the process back into RAM.
   - This may involve removing another process from memory if there is not enough available space, resulting in more swapping operations.
   - The process is loaded back into memory, and execution continues from the point where it was swapped out.

---

#### **Swapping Process Flow**:

1. **Swapping Out**:
   - OS identifies a process to swap out based on factors like inactivity or low priority.
   - The process's memory state (contents) is saved to swap space.
   - The process is then removed from physical memory.

2. **Swapping In**:
   - OS identifies a process that needs to be swapped in (either based on user requests or process scheduling).
   - The process is loaded from swap space into RAM.
   - The process resumes execution where it left off.

---

#### **Advantages of Swapping**:
- **Memory Optimization**: Allows the system to handle more processes than the available physical memory by using disk storage.
- **Efficient Resource Utilization**: Ensures that processes are executed without running out of memory, even in a multi-tasking environment.

#### **Disadvantages of Swapping**:
- **Performance Overhead**: Swapping processes in and out of memory involves disk I/O, which is slower than accessing RAM. This can result in a performance hit if excessive swapping occurs.
- **Disk Wear**: Frequent use of swap space can wear out the disk faster, especially with solid-state drives (SSDs) due to write cycles.

Swapping helps systems handle limited memory by using disk space for temporary storage, ensuring better utilization of available resources. However, the trade-off is increased I/O operations, which can affect system performance.

### **Demand Paging**

**Demand Paging** is a memory management scheme where pages of a process are loaded into memory only when they are required, rather than preloading the entire process into memory at the start. This helps in optimizing the use of physical memory and allows the system to run larger processes than the available physical memory by swapping pages in and out of memory.

---

#### **Key Concepts of Demand Paging**

1. **Data Structures for Demand Paging**:
   - **Page Table**: A data structure used to map the virtual address of a process to its physical address in memory. The page table has an entry for each page, indicating whether the page is in memory or needs to be loaded from disk.
   - **Frame**: A fixed-size block of physical memory into which pages are loaded. The frame number is stored in the page table to map virtual pages to physical frames.
   - **Page Map**: A mapping of virtual pages to physical frames, which can indicate whether a page is in memory or on disk.
   - **Page Fault Handler**: The system's component responsible for handling page faults (discussed below) and bringing the required page from disk into memory.

2. **Page Stealer Process**:
   - The **Page Stealer** is a part of the OS responsible for freeing up space in physical memory when needed.
   - It selects a page to evict from memory to make room for a newly required page. The page is usually chosen based on algorithms like **Least Recently Used (LRU)**, **First-In-First-Out (FIFO)**, or others.
   - The evicted page is swapped out to disk if modified, or simply discarded if it's not needed anymore (depending on the page replacement policy).

3. **Page Faults**:
   - A **Page Fault** occurs when a process tries to access a page that is not currently in memory. This can happen when:
     - The page has never been loaded into memory.
     - The page has been swapped out to disk to free memory for other processes.
   - When a page fault occurs, the OS takes the following steps:
     1. **Page Fault Handler**: The handler is invoked to deal with the fault. It checks if the page is valid and whether it's in the page table.
     2. **Page Swap**: If the page is valid but not in memory, the OS retrieves the page from disk (swap space) and loads it into a free frame in memory.
     3. **Update Page Table**: The page table is updated to reflect the page's new location in physical memory.
     4. **Resume Process**: Once the page is loaded, the process resumes execution, accessing the required data.

---

#### **Advantages of Demand Paging**:
- **Efficient Memory Usage**: Only the pages that are needed are loaded into memory, reducing the overall memory footprint.
- **Faster Startup**: Since only part of the program is loaded initially, the system can start the program faster.
- **Larger Programs**: Programs that are too large to fit into memory can still run because only parts of them are loaded at a time.

#### **Disadvantages of Demand Paging**:
- **Page Fault Overhead**: Each time a page fault occurs, there is an overhead associated with loading the page from disk, which can slow down the system if too many page faults occur.
- **Thrashing**: If the system is constantly swapping pages in and out of memory (due to insufficient physical memory or poor page replacement algorithms), it may lead to thrashing, significantly degrading performance.

---

#### **Summary**
Demand paging is a memory management strategy that loads pages into memory only when needed, using data structures like page tables and a page stealer process to manage memory efficiently. While it helps in running large programs with limited memory, it introduces the potential overhead of page faults and swapping, which can affect system performance.