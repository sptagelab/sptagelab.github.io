# Security Privacy Trust (SPT) A.G.E. Website with Modular Design

## Directory Structure

- <b>css</b> (CSS files for the main SPTA.G.E. website.)

- <b>conferences</b> (<u>Archived</u> conference websites' folder.)

- <b>data</b> (Distributed DB/XML files of the website. Please update your information here with the respected XML file of different section.)

- <b>doc</b> (General files (e.g., Papers, Picutres, ..etc) that are related to the content of the main SPTA.G.E. website.)

- <b>img</b> (Image files for the main SPTA.G.E. website.)

- <b>js</b> (Javascript program files.)

- <b>projects</b> (<u>Archived</u> project websites' folder.)

- <b>symposiums</b> (<u>Archived</u> symposium websites' folder.)

- <b>workshops</b> (Workshop websites' folder.)

## 

## Data Entries

Data entries for important for modular SPT A.G.E. modular website. These data entries provide the data records for the DDB(Distributed Database.). Please read the following instruction carefully before editing these data entries.



### General rules for data entries:

#### Storage Location:

All website data entries are contained at: <b><u>data</u></b> directory.



#### Expression and Context:

- All records are structured in <b><u>XML</u></b> format.

- <b>HTML expressions are allowed.</b> However, <b><u>Special characters listed in HTML entities need to be escaped properly</u></b>.
  
  - Example:
    
    - ```textile
      What you want: <b>Emphasize this</b>
      ```
    
    - ```textile
      What you should do: &lt;b&gt;Emphasize this&lt;/b&gt;
      ```
  
  - Commonly used HTML enties:
    
    - ```textile
      < : &lt;
      ```
    
    - ```textile
      > : &gt;
      ```
    
    - ```textile
      " : &quot;
      ```
    
    - ```textile
      & : &amp;
      ```
    
    - ```textile
      space : &nbsp;
      ```
    
    - ```textile
      ( : &#40;
      ```
    
    - ```textile
      ) : &#41;
      ```
    
    - For more information about HTML entities, take a look at this [table](https://www.freeformatter.com/html-entities.html)



#### About Data Entries

- intro.xml

- news.xml

- people.xml

- works.xml

- events.xml

- footer.xml

 

## Notes

<b>1. Resources for sub-sites:</b> Please kindly not placing sub-sites' related resources to root folders as they are resources that are related to the main site. Please place sub-sites' resources in sub-folders respectively.

<b>2. Avoid huge files:</b> If you need to demonstrate related resource that is greater than <b>200 MB</b>, put this resource somewhere (e.g., OneDrive, Google Drive, TeraBox...). Otherwise: 1. You need to get it through by Git-CLI, and 2. It may cause the total size of the site exceeds Github's allowance too quickly (5GB).

<b>3. If that is active, keep it as separate repository:</b> If any subsites are still under active update or using, please keep it as separate repository - Using "Github Pages" settings to hook it under the website.

<b>4. Private matters shouldn't be here:</b> Please do not push any updates that may breach or distrub your's or one's privacy, as these updates can leave traces in history, even if these updates are removed later.
