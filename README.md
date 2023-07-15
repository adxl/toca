# TOCA

Toca metrics collector for React

## Install

```bash
npm install toca
```

## Utilisation

### TrackingProvider

_Get your **AppID** et **AppSecret** from the Toca backoffice_

```jsx
<TrackingProvider appId="AppID" appSecret="AppSecret">
    <App />
</TrackingProvider>
```

---

### EventTracker

Supported events:

- Click
- Hover
- Blur
- Focus
- Submit

Attributes:

- `name`: the name of the element to trac
- `event`: the event type to track (list above)

```jsx
<EventTracker name="Click me button" event="click">
    <button onClick={...}>Click me</button>
</EventTracker>
```

---

### MouseTracker

Tracks the cursor on a specified area

```jsx
<MouseTracker>
    <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
        width: 600,
        height: 600,
    }}
    >
    Move your mouse here
    </div>
</MouseTracker>
```

---

### UserSession

Tracks the users sessions

```jsx
<TrackingProvider appId="AppID" appSecret="AppSecret">
    <UserSession>
        <App />
    </UserSession>
</TrackingProvider>
```

---

### PageView

Captures views on elements

`title`: the name of the element/page

```jsx
<PageView title="Payment modal">
    <div />
</PageView>
```
