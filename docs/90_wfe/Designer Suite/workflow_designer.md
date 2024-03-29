# Workflow Designer

Web diagramming application which allows user to design and collaborate in creation of ESOP workflows.

## Menu Bar
![Menu](images/menu.png)

| Button   | Description                                    |
|----------|------------------------------------------------|
| New BPMN | Create new canvas                              |
| Save     | Save current BPMN                              |
| Publish  | Publish BPMN (published BPMN cannot be edited) |
| Load     | Load saved or published BPMN                   |
| Import   | Import BPMN from local drive                   |
| Export   | Export BPMN into local drive                   |


## Simple Workflow
Let's build a simple workflow by following below steps:
- Drag and drop BPMN elements from the palette onto the canvas
- Assign the element properties by clicking on it to reveal the properties panel on the right side
- Click on the save button to save it

![Simple](images/wfd_start.gif)

## Data Flow
Activity that return data will be assigned to its result variable name which can be further utilized in subsequent activities or gateways.

![Data](images/wfd_data.gif)

## Gateways
### Parallel
Parallel triggers execution of multiple activities at the same time and wait until all the activities are completed before moving onto next steps.

![Parallel](images/wfd_parallel.gif)

### Switch
Switch is an exclusive gateway which will only proceed when the condition defined inside the flow is true.
If there are conflicting conditions, lowest flow order number will take precedence over others.

![Switch](images/wfd_switch.gif)

## Form
Form templates which are generated by [Form Designer](form_designer.md) can be used as user input activities in workflow.
When user submit the form, form activities will return the submitted data in JSON object.

To access the value of the form input, use switch-flow advance mode tab and access them by their form components key.

![Switch](images/wfd_form.gif)
